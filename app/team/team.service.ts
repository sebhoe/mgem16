import {Injectable} from 'angular2/core';
import {Player} from '../players/player';

@Injectable()
export class TeamService {
    team : Player[] = [];
    
    constructor() {
        
    }
    
    getTeam() {
        return this.team;
    }
    
    addToTeam(player : Player) {
        return this.team.push(player);
    }
    
    removeFromTeam(player : Player) {
        var index: number = this.team.indexOf(player, 0);
        if (index > -1) {
            this.team.splice(index, 1);
        }
        return this.team.length;
    }
  
}