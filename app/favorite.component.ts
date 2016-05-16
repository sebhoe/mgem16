import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `
        <i 
            class="glyphicon fa-2x"
            [ngClass]="{
                'glyphicon-star': isFavorite,
                'glyphicon-star-empty': !isFavorite
            }"
            (click)="onClick()"
            >
        </i>
    `,
    styles: [`
        .glyphicon-star, .glyphicon-star-empty {
            color: goldenrod;
            cursor: pointer;
        }
        `]
})
export class FavoriteComponent {
    @Input() isFavorite = false;
    @Input() object;
        
    @Output() change = new EventEmitter();
    
    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({
            id: this.object.id,
            name: this.object.name,
            newValue: this.isFavorite
        });
    }
}