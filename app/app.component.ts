import {Component, OnInit} from 'angular2/core';

import {PlayerlistComponent} from './players/playerlist.component';
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
    directives: [PlayerlistComponent, TeamlistComponent]
})
export class AppComponent {
    title = 'Most Goal Europameisterschaft 2016';
    
    viewMode = 'playerlist';

    team: Player[] = [];

    constructor() {
        
    }
    
    onTeamChange($event) {
        console.log("onteamchange event.....");
        
        this.team.push($event.player);
        
        console.log(this.team);
        
    }
 }