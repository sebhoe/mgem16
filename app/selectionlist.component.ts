import {Component} from 'angular2/core';
import {PlayerlistComponent} from './playerlist.component';

@Component({
    selector: 'selectionlist',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            
            <br/>
            
            <playerlist></playerlist>
    `,
    directives: [PlayerlistComponent]
})
export class SelectionlistComponent {
    title = "Spielerliste";
    description = "Wähle deine Spieler aus:";
        
} 

