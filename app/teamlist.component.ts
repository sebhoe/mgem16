import {Component, Input} from 'angular2/core';
import {PlayerlistComponent} from './playerlist.component';

@Component({
    selector: 'teamlist',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            
            <br/>
            
            <playerlist [players]="players" [showFavoritesOnly]="true"></playerlist>
    `,
    directives: [PlayerlistComponent]
})
export class TeamlistComponent {
    title = "Mannschaftskader";
    description = "So sieht dein Kader aus:";
    
    @Input()    players;
    
}