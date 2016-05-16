import {Component} from 'angular2/core';
import {PlayersService} from './players.service';
import {HTTP_PROVIDERS} from 'angular2/http';

import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

@Component({
    selector: 'team',
    template: `
        <h3>Team</h3>
        <div *ngIf="players.length > 0">
            Hier kommt dein Team hin.
           
           (am besten in neue componente playerlist auslagern....)
           
           <ul>
              <li *ngFor="#player of players">
                <bs-media>
                    <favorite 
                        class="icon"
                        [object]="player"
                        [isFavorite]="player.isFavorite" 
                        (change)="onFavoriteChange($event)">
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
    providers: [PlayersService, HTTP_PROVIDERS]
})
export class TeamComponent {
    players = [];
    
    constructor(private _playersService : PlayersService){
        this.players = _playersService.getPlayers();
    }

    // statt
    // <div *ngIf="players.length > 0">
    // lieber
    // <div [hidden]="players.length > 0">
    // wenn kostspieliger wäre die DOM-Objekte jedesmal zu erzeugen
}