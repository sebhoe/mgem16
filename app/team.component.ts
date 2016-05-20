import {Component, OnInit} from 'angular2/core';
import {PlayersService} from './players.service';
import {HTTP_PROVIDERS} from 'angular2/http';

import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

import {FavoriteFilterPipe} from './filterpipe';

@Component({
    selector: 'team',
    template: `
        <h3>Team</h3>
        <div *ngIf="players.length > 0">
            Hier kommt dein Team hin.
           <br/>
           (am besten in neue componente playerlist auslagern....)
           <br/>
           
           <ul>
              <li *ngFor="#player of players">
                <bs-media [hidden]="!player.isFavorite">
                    <favorite 
                        class="icon"
                        [object]="player"
                        [isFavorite]="player.isFavorite">
                    </favorite>
                    <img class="media-object image" 
                        src="http://lorempixel.com/50/50/cats/?v={{player.id}}" 
                        alt="{{player.id}} - {{player.name}}">
                    <div class="heading">{{player.name}}</div>
                    <div class="info">weitere Infos...</div>
                </bs-media>
              </li>
            </ul>
                         
        </div>
        <div *ngIf="players.length == 0">
            Du hast noch keine Spieler für dein Team ausgewählt.
        </div>
    `,
    directives: [FavoriteComponent, BootstrapMedia],
    pipes: [FavoriteFilterPipe],
    providers: [PlayersService, HTTP_PROVIDERS]
})
export class TeamComponent implements OnInit {
    players = [];
    
    constructor(private _playersService : PlayersService){
        
    }
    
    ngOnInit() {
        this.players = this._playersService.getPlayers()
                                    .filter(player => player.isFavorite);
    }
    

    // statt
    // <div *ngIf="players.length > 0">
    // lieber
    // <div [hidden]="players.length > 0">
    // wenn kostspieliger wäre die DOM-Objekte jedesmal zu erzeugen
}