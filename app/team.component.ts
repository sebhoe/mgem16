import {Component} from 'angular2/core'

@Component({
    selector: 'team',
    template: `
        <h3>Team</h3>
        <div *ngIf="players.length > 0">
            Hier kommt dein Team hin.
            liste
            ngFor
        </div>
        <div *ngIf="players.length == 0">
            Du hast noch keine Spieler für dein Team ausgewählt.
        </div>
    `   
})
export class TeamComponent {
    players = [];
    
    // statt
    // <div *ngIf="players.length > 0">
    // lieber
    // <div [hidden]="players.length > 0">
    // wenn kostspieliger wäre die DOM-Objekte jedesmal zu erzeugen
}