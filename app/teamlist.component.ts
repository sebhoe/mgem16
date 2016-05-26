import {Component, OnInit} from 'angular2/core';
import {FavoriteComponent} from './shared/favorite.component';
import {BootstrapMedia} from './shared/bootstrap.media.component';

import {TeamService} from './team.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'teamlist',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            
            <br/>
            
            <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
            
            <div *ngIf="team.length == 0">
                Keine Spieler ausgewählt.
            </div>

            <div *ngIf="team.length > 0">            
                <ul>
                <li *ngFor="#player of team">
                    <bs-media>
                        <favorite 
                            class="icon"
                            [object]="player"
                            [isFavorite]="player.isFavorite">
                        </favorite>
                        <img class="media-object image" 
                            src="http://lorempixel.com/50/50/cats/?v={{player.id}}" 
                            alt="{{player.id}} - {{player.name}}">
                        <div class="heading">{{player.name}}</div>
                        <div class="info">weitere Infos...</div>
                    </bs-media>
                </li>
                </ul>  
            </div>
            `,
    styles: [`
                li {
                list-style-type: none;
                }
            `],
    directives: [FavoriteComponent, BootstrapMedia],
    providers: [TeamService, HTTP_PROVIDERS]  
})
export class TeamlistComponent implements OnInit {
    title = "Mannschaftskader";
    description = "So sieht dein Kader aus:";
    isLoading = true;
    team = [];
    
    constructor(private _teamService : TeamService) {
        
    }
    
    ngOnInit(){    
        this.team = this._teamService.getTeam();
        
        if(this.team && this.team.length == 0)
            this.isLoading = false;
    }
}