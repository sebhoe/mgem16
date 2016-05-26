import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {PlayerService} from './player.service';
import {TeamService} from '../team/team.service';
import {TeamlistComponent} from '../team/teamlist.component';
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
    directives: [FavoriteComponent, BootstrapMedia, PlayerdetailsComponent, TeamlistComponent],
    providers: [PlayerService, TeamService]
})
export class PlayerlistComponent implements OnInit {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
    isLoading = true;
    
    players: Player[] = [];
    selectedPlayer: Player;
    
    numberOfPlayersInTeam = 0;
    @Output() teamChange = new EventEmitter();

    
    constructor(private _playerService: PlayerService,
                private _teamService: TeamService) { }

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
        console.log("id: ",$event.id," name: ",$event.name," isFavorite: ",$event.isFavorite);
        
//        this.team.push($event.object);
//        console.log("team: ", this.team);

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