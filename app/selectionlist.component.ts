import {Component, Input} from 'angular2/core';
import {PlayerlistComponent} from './playerlist.component';

@Component({
    selector: 'selectionlist',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            
            <br/>
            
            <playerlist [players]="players"></playerlist>
    `,
    directives: [PlayerlistComponent]
})
export class SelectionlistComponent {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
    
    @Input()    players;
        
} 

