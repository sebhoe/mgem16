import {Component, Input} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

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
                            [favObject]="player"
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
    directives: [FavoriteComponent, BootstrapMedia]   
})
export class PlayerlistComponent {
    @Input()    showFavoritesOnly = false;
    @Input()    players;
    
    constructor() {

    }
    

        
        
        //continue.....


    
}