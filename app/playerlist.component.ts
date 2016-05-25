import {Component, OnInit, Input} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

import {PlayersService} from './players.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'playerlist',
    template: `
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
    providers: [PlayersService, HTTP_PROVIDERS]    
})
export class PlayerlistComponent implements OnInit {
    @Input()    showFavoritesOnly = false;
    isLoading = true;
    players;
    
    constructor(private _playersService : PlayersService) {
        
    }
    
    ngOnInit(){
        
        this.players = this._playersService.getPlayersFromJson()
            .then(
                players => {
                    this.showFavoritesOnly ? 
                        this.players = players.filter(player => player.isFavorite)
                        :
                        this.players = players;
                    console.log("isLoading... " + JSON.stringify(players));
                    this.isLoading = false;   
                }
//                error => console.error('Error: ' + error),
//                () => console.log('Loading players from json file Completed!')
            );

        
        
        //continue.....


    }
}