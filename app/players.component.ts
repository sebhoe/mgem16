import {Component} from 'angular2/core'
import {FavoriteComponent} from './favorite.component'

import {PlayersService} from './players.service'

@Component({
    selector: 'players',
    template: `
            <h2>{{title}}</h2>
            <h3>{{description}}</h3>
            <ul>
              <li *ngFor="#player of players">
              <favorite></favorite> {{ player }}
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
}