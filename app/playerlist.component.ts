import {Component, OnInit} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

import {PlayerService} from './player.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'playerlist',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            
            <br/>
            
            <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>

            <div *ngIf="players.length == 0">
                Keine Spieler ausgewählt.
            </div>

            <div *ngIf="players.length > 0">            
                <ul>
                <li *ngFor="#player of players">
                    <bs-media>
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
            `,
    styles: [`
                li {
                list-style-type: none;
                }
            `],
    directives: [FavoriteComponent, BootstrapMedia],
    providers: [PlayerService, HTTP_PROVIDERS]    
})
export class PlayerlistComponent implements OnInit {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
    isLoading = true;
    players;
    
    constructor(private _playerService : PlayerService) {
        
    }
    
    ngOnInit(){
        this.players = this._playerService.getPlayersFromJson()
            .then(
                players => {
                    console.log("isLoading... " + JSON.stringify(players));
                    this.players = players;
                    this.isLoading = false;   
                }
//                error => console.error('Error: ' + error),
//                () => console.log('Loading players from json file Completed!')
            );
    }
}