import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PlayerlistComponent} from './players/playerlist.component';
import {PlayerService} from './players/player.service';

@RouteConfig([
    { path: '/players', name: 'Playerlist', component: PlayerlistComponent, useAsDefault: true},
//    { path: '/team', name: 'Teamlist', component: TeamlistComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Playerlist'] }
])
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
    directives: [PlayerlistComponent, ROUTER_DIRECTIVES],
    providers: [PlayerService]
})
export class AppComponent implements OnInit {
    title = 'Most Goal Europameisterschaft 2016';
    
    constructor(private _playerService : PlayerService) {
    }
    
    ngOnInit(){

    }


 }