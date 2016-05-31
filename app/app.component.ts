import {Component, OnInit} from '@angular/core';

import {PlayerlistComponent} from './players/playerlist.component';
import {PlayerService} from './players/player.service';
import {TeamService} from './team/team.service';
import {Player} from './players/player';
import {TeamlistComponent} from './team/teamlist.component';
//import {MatchlistComponent} from './match/matchlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styles: [`
        .nav {
            cursor: pointer;
        }

        div.container { 
            padding-top: 70px;  /* because of fixed navbar */ 
        }
        
        img.logo {
            height: 56px;
            width: auto;
            margin: 3px 24px;
        }
    `],
    directives: [PlayerlistComponent, TeamlistComponent],
    providers: [PlayerService, TeamService]
})
export class AppComponent implements OnInit {
    title = 'Most Goal Europameisterschaft 2016';   
    viewMode = 'playerlist';
    isLoading = true;
    players;
    team: Player[] = [];
    numberOfPlayersInTeam = 0;
    
    constructor(private _playerService: PlayerService,
                private _teamService: TeamService) {
            
    }
    
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
    
    onTeamChange($event) {
        console.log("app.comp.onteamchange: ", $event);
        
        if(!$event) return;
        $event.isFavorite ?
            this.numberOfPlayersInTeam = this._teamService.addToTeam($event)
            :
            this.numberOfPlayersInTeam = this._teamService.removeFromTeam($event);
        
        this.team = this._teamService.getTeam();
                
        console.log("#Players in team = ",this.numberOfPlayersInTeam);
        console.log("onteamchange event.....", this.team);
    }
 }