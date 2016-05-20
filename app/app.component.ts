import {Component} from 'angular2/core';
import {PlayersComponent} from './players.component';
import {TeamComponent} from './team.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.style.css'],
    directives: [PlayersComponent, TeamComponent]
})
export class AppComponent {
    title = 'Most Goal Europameisterschaft 2016';
    
    viewMode = 'players';
 }