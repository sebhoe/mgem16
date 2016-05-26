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
//        this.team.has(player);
    }
  
}