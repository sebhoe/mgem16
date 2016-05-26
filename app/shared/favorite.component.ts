import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
        <i 
            class="glyphicon fa-2x"
            [ngClass]="{
                'glyphicon-star': object.isFavorite,
                'glyphicon-star-empty': !object.isFavorite
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
    @Input() object;    //is player object
        
    @Output('favoriteChange') change = new EventEmitter();
     
    onClick(){
        this.object.isFavorite = !this.object.isFavorite;
        this.change.emit(this.object);
    }
}