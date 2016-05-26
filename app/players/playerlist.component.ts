import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {Player} from './player';
import {PlayerdetailsComponent} from './playerdetails.component';
import {TeamService} from '../team/team.service';

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
    providers: [TeamService]
})
export class PlayerlistComponent {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
    isLoading = true;
    
    @Input() players;
    selectedPlayer: Player;
    
    numberOfPlayersInTeam = 0;
    @Output() teamChange = new EventEmitter();

    
    constructor(private _teamService: TeamService) { }


    onSelect(player: Player) {
        this.selectedPlayer = player;
    }
    
    onFavoriteChange($event) {       
        console.log("id: ",$event.id," name: ",$event.name," isFavorite: ",$event.isFavorite);
        
        // test if is already there -> remove, else add
        
        this.numberOfPlayersInTeam = this._teamService.addToTeam($event.object);
        
        console.log(this.numberOfPlayersInTeam);
        
        this.teamChange.emit({
                player: $event.object,
                addToTeam: $event.isFavorite 
            }
        );

        
     }
    
}