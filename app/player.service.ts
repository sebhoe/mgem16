import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Injectable} from 'angular2/core';
import {Player} from './player';

@Injectable()
export class PlayerService {
//    private _url = "http://jsonplaceholder.typicode.com/posts";
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
    
    createPlayer(player: Player) {
        return this._http.post(this._url, JSON.stringify(player))
            .map(res => res.json());
    }
}