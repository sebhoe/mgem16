import {Component, OnInit, Input} from 'angular2/core';
import {FavoriteComponent} from '../shared/favorite.component';
import {BootstrapMedia} from '../shared/bootstrap.media.component';
import {TeamService} from './team.service';
import {Player} from '../players/player';
import {PlayerdetailsComponent} from '../players/playerdetails.component';

@Component({
    selector: 'teamlist',
    templateUrl: './app/team/teamlist.component.html',
    styles: [`
                li {
                    list-style-type: none;
                }
            `],
    directives: [FavoriteComponent, BootstrapMedia, PlayerdetailsComponent],
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
        console.log("teamlist -> ngOnChanges() ... ", this.team);
        
    }
    
    onFavoriteChange($event) {
        console.log("teamlist -> onFavoriteChange() ... ");
        
    }
    

}