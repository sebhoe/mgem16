import {Component, OnInit, Input, forwardRef} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {PlayerlistComponent} from '../players/playerlist.component';
import {TeamService} from './team.service';
import {Player} from '../players/player';

@Component({
    selector: 'teamlist',
    template: `
            <h3>{{title}}</h3>
            <span>{{description}}</span>
            
            <br/>
            
            <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
            
            <div *ngIf="team?.length == 0">
                Keine Spieler ausgewählt.
            </div>
            
            <div *ngIf="team?.length > 0">
                Haha haha
                
                {{team | json}}
            </div>
            `,
    styles: [`
                li {
                    list-style-type: none;
                }
            `],
    directives: [FavoriteComponent, BootstrapMedia, forwardRef(() => PlayerlistComponent)],
    providers: [TeamService]  
})
export class TeamlistComponent implements OnInit {
    title = "Mannschaftskader";
    description = "So sieht dein Kader aus:";
    isLoading = true;
    
    @Input() team;
    
    
    constructor(private _teamService: TeamService) {
        
    }
    
    ngOnInit() {   
        
        console.log(this.team);
        
            
//        if(this.team && this.team.length == 0)
  //          this.isLoading = false;
    }
    
    ngOnChanges() {
        console.log("teamlist -> ngOnChanges() ... ");
        
    }
    

}