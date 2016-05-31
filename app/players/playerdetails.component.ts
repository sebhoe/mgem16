import {Component, Input} from '@angular/core';
import {Player} from './player';

@Component({
    selector: 'playerdetails',
    template: `
        <div *ngIf="player">
            {{player.id}} - {{player.name}}
            <span [hidden]="!player.isFavorite"> - in meinem Team</span>
        </div>
        `
})
export class PlayerdetailsComponent {
    @Input() player: Player;
}