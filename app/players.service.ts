import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Player} from './player';

@Injectable()
export class PlayersService {
    private _url = "http://jsonplaceholder.typicode.com/posts";
    
    constructor(private _http: Http){
        
    }
  
    getPlayers() {
        return [
            { id: 1, name: "Manuel Neuer", isFavorite: true},
            { id: 3, name: "Mats Hummels", isFavorite: false},
            { id: 7, name: "Toni Kroos", isFavorite: false},
            { id: 11, name: "Thomas Müller", isFavorite: true},
            { id: 13, name: "Mario Gomez", isFavorite: false}
            ]
    }
      
    getPosts() : Observable<Player[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    
    createPlayer(player: Player) {
        return this._http.post(this._url, JSON.stringify(player))
            .map(res => res.json());
    }
}