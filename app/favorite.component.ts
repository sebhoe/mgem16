import {Component, Input, Output, EventEmitter} from 'angular2/core';

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
    @Input() favObject;
        
    @Output() change = new EventEmitter();
    
    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({
            id: this.favObject.id,
            name: this.favObject.name,
            newValue: this.isFavorite            
        });
        
        console.log("emit ->    id: " + this.favObject.id 
                          + " name: " + this.favObject.name
                      + " newValue: " + this.isFavorite);
        
        //=> catch this emit and save somewhere
        // --> afterwards: if viewmode is teams, then load only favorite players!
    }
}