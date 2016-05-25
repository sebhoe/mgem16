import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PlayerlistComponent} from './playerlist.component';
import {TeamlistComponent} from './teamlist.component';

@RouteConfig([
    { path: '/players', name: 'Playerlist', component: PlayerlistComponent, useAsDefault: true},
    { path: '/team', name: 'Teamlist', component: TeamlistComponent },
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
    directives: [PlayerlistComponent, TeamlistComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    title = 'Most Goal Europameisterschaft 2016';

 }