import {Component, OnInit} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {BootstrapMedia} from './bootstrap.media.component';

import {PlayersService} from './players.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'players',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
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
            `,
    directives: [FavoriteComponent, BootstrapMedia],
    providers: [PlayersService, HTTP_PROVIDERS]
})
export class PlayersComponent implements OnInit {
    title = "Spieler";
    description = "Hier kommt die Spielerliste hin";
    players;
    isLoading = true;
    
    constructor(private _playersService : PlayersService){

    }
    
    ngOnInit(){
        this.players = this._playersService.getPlayers();
        
        this._playersService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;   
                console.log(posts[0].id)
            });
    }
}