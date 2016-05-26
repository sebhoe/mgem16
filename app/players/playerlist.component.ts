import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {Player} from './player';
import {PlayerdetailsComponent} from './playerdetails.component';

@Component({
    selector: 'playerlist',
    templateUrl: './app/players/playerlist.component.html',
    styleUrls: ['./app/shared/playerlist.css'],
    directives: [FavoriteComponent, BootstrapMedia, PlayerdetailsComponent]
})
export class PlayerlistComponent {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
    isLoading = true;
    
    @Input() players;
    selectedPlayer: Player;
    @Output() teamChange = new EventEmitter();


    onSelect(player: Player) {
        this.selectedPlayer = player;
    }
    
    onFavoriteChange($event) {   
        console.log("playerlist.comp.onfavchange: ", $event, " name", $event.name);
             
        this.teamChange.emit($event);
     }
    
}