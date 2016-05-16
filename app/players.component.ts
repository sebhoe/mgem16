import {Component} from 'angular2/core'
import {FavoriteComponent} from './favorite.component'
import {BootstrapMedia} from './bootstrap.media.component'
import {PlayersService} from './players.service'

@Component({
    selector: 'players',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
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
            `,
    directives: [FavoriteComponent, BootstrapMedia],
    providers: [PlayersService]
})
export class PlayersComponent {
    title = "Spieler";
    description = "Hier kommt die Spielerliste hin";
    players;
    
    constructor(playerService : PlayersService){
        this.players = playerService.getPlayers();
    }
    
    onFavoriteChange($event){
        console.log($event);
    }
}