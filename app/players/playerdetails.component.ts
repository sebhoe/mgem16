import {Component, Input} from 'angular2/core';
import {Player} from './player';

@Component({
    selector: 'playerdetails',
    template: `
        <div *ngIf="player">
            {{player.id}} - {{player.name}} - {{player.isFavorite}}
        </div>
        `
})
export class PlayerdetailsComponent {
    @Input() player: Player;
}