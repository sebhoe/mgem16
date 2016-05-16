import {Component} from 'angular2/core'
import {FavoriteComponent} from './favorite.component'

import {PlayersService} from './players.service'

@Component({
    selector: 'players',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            <ul>
              <li *ngFor="#player of players">
              
              <div class="media">
                <a href="#">
                <div class="media-left media-middle">
                    <favorite 
                        [object]="player"
                        [isFavorite]="player.isFavorite" 
                        (change)="onFavoriteChange($event)">
                    </favorite>
                </div>
                <div class="media-left media-middle">
                    <img class="media-object" 
                        src="http://lorempixel.com/50/50/cats/?v={{player.id}}" 
                        alt="{{player.id}} - {{player.name}}">
                </div> 
                <div class="media-body">
                    <h4 class="media-heading">{{player.name}}</h4>
                    <span>weitere Infos...</span>
                </div>
                </a>
              </div>
              
              </li>
            </ul>  
            `,
    directives: [FavoriteComponent],
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