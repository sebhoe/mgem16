import {Component} from 'angular2/core';
import {SelectionlistComponent} from './selectionlist.component';
import {TeamlistComponent} from './teamlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.style.css'],
    directives: [SelectionlistComponent, TeamlistComponent]
})
export class AppComponent {
    title = 'Most Goal Europameisterschaft 2016';
    viewMode = 'selection';

 }