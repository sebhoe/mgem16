import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {TeamService} from './team.service';
import {Player} from '../players/player';
import {PlayerdetailsComponent} from '../players/playerdetails.component';

@Component({
    selector: 'teamlist',
    templateUrl: './app/team/teamlist.component.html',
    styleUrls: ['./app/shared/playerlist.css'],
    directives: [FavoriteComponent, BootstrapMedia, PlayerdetailsComponent],
    providers: [TeamService]  
})
export class TeamlistComponent implements OnInit {
    title = "Mannschaftskader";
    description = "So sieht dein Kader aus:";
    isLoading = true;
    selectedPlayer: Player;
    
    @Input() team;
    @Output() teamChange = new EventEmitter();
    
    
    constructor(private _teamService: TeamService) {
        
    }
    
    ngOnInit() {   
        console.log("teamlist.comp.oninit ... ",this.team);
    }
    
    ngOnChanges() {
        console.log("teamlist -> ngOnChanges() ... ", this.team);
    }
    
    onFavoriteChange($event) {
        console.log("teamlist -> onFavoriteChange() ... ", $event, " name", $event.name);
    
        this.teamChange.emit($event);
    }
    
    onSelect(player: Player) {
        this.selectedPlayer = player;
    }

}