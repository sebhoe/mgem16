import {Component} from 'angular2/core'
import {PlayersComponent} from './players.component'

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><players></players>',
    directives: [PlayersComponent]
})
export class AppComponent {
    title = 'Most Goal Europameisterschaft 2016';
 }