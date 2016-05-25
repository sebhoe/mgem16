import {Component} from 'angular2/core';

@Component({
    selector: 'bs-media',
    template: `
        <div class="media">
            <div class="media-left media-middle">
                <ng-content select=".icon"></ng-content>
            </div>
            <div class="media-left media-middle">
                <ng-content select=".image"></ng-content>
            </div> 
            <div class="media-body">
                <h4 class="media-heading">
                    <ng-content select=".heading"></ng-content>
                </h4>
                <span>
                    <ng-content select=".info"></ng-content>
                </span>
            </div>
        </div>
    `
})
export class BootstrapMedia {
    
}