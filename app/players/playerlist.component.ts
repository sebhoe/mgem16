import {Component, OnInit} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {PlayerService} from './player.service';
import {Player} from './player';
import {PlayerdetailsComponent} from './playerdetails.component';

@Component({
    selector: 'playerlist',
    templateUrl: './app/players/playerlist.component.html',
    styles: [`
                li {
                    list-style-type: none;
                }
                li:hover {
                    background-color: rgba(178, 219, 251, 0.4);
                }
                .selected {
                    background-color: rgba(178, 219, 251, 0.8);
                }
            `],
    directives: [FavoriteComponent, BootstrapMedia, PlayerdetailsComponent],
    providers: [PlayerService]
})
export class PlayerlistComponent implements OnInit {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
    isLoading = true;
    
    players: Player[] = [];
    selectedPlayer: Player;
    selectedPlayerName: string;
    
    constructor(private _playerService: PlayerService) { }

    ngOnInit() {
        this._playerService.getPlayersFromJson()
            .then(
                players => {
                    console.log("isLoading... " + JSON.stringify(players));
                    this.players = players;
                    this.isLoading = false;
                }
            ).catch(
                error => console.error('Error on loading Players: ' + error)
            );       
    }

    onSelect(player: Player) {
        this.selectedPlayer = player;
    }

     
     onFavoriteChange($event) {
        this.selectedPlayerName = $event.name;
        
        console.log("id: ",$event.id," name: ",$event.name," isFavorite: ",$event.isFavorite);
        
         
         
/*         
        // test if is already there -> remove, else add
        console.log("onFavoriteChange...", $event);
  
        console.log("team before: ", this.team);
        
        
        //besser: nur die id und isFavorite emitten
        // dann den player holen und hinzufügen,
        // oder entfernen, abhängig von isFavorite  
        
          
        this._teamService.addToTeam({id: $event.id, name: $event.name, isFavorite: $event.isFavorite});
        
        console.log("team after: ", this.team);
*/
     }

}