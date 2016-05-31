import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Player} from './player';

@Injectable()
export class PlayerService {
    private _url = "app/assets/api/playersDBfile.json";
    
    constructor(private _http: Http){
        
    }
  
    getPlayersFromJson() : Promise<Player[]> {
        return this._http.get(this._url)
            .map(response => response.json())
            .toPromise();
    }

/*  TODO: get players from DB (mongo?)
    getPlayers() {
        return [];
    }
*/
  
 
 /*   
    createPlayer(player: Player) {
        return this._http.post(this._url, JSON.stringify(player))
            .map(res => res.json());
    }
*/
}