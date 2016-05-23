import {Component, OnInit, Input} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

import {PlayersService} from './players.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'playerlist',
    template: `
            <div *ngIf="players.length == 0">
                Keine Spieler ausgewählt.
            </div>
            <div *ngIf="players.length > 0">
            
                <div *ngIf="isLoading">Spielerliste wird geladen ...</div>
            
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
        
        this.players = this._playersService.getPlayersFromJson();
        
        
        this.players.subscribe(
                players => {
                    this.showFavoritesOnly ? 
                        this.players = players.filter(player => player.isFavorite)
                        :
                        this.players = players;
                    this.isLoading = false;   
                    console.log("isLoading... " + JSON.stringify(players));
                },
                error => console.error('Error: ' + error),
                () => console.log('Loading players from json file Completed!')
            );

        
        
        //continue.....


    }
}