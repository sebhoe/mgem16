import {Component, OnInit, Output} from 'angular2/core';
import {SelectionlistComponent} from './selectionlist.component';
import {TeamlistComponent} from './teamlist.component';

import {PlayersService} from './players.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls: ['app/app.style.css'],
    directives: [SelectionlistComponent, TeamlistComponent],
    providers: [PlayersService, HTTP_PROVIDERS] 
})
export class AppComponent implements OnInit {
    title = 'Most Goal Europameisterschaft 2016';
    viewMode = 'selection';
    isLoading = true;
    
    @Output()   players;
    
    constructor(private _playersService : PlayersService) {
        this.players = this._playersService.getPlayersFromJson();
        
    }
    
    ngOnInit(){
    this.players.subscribe(
            players => {
                this.players = players;
                this.isLoading = false;   
                console.log("isLoading... " + JSON.stringify(players));
            },
            error => console.error('Error: ' + error),
            () => console.log('Loading players from json file Completed!')
        );
    }

 }