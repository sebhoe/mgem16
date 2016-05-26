System.register(['angular2/core', './players/playerlist.component', './players/player.service', './team/teamlist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, playerlist_component_1, player_service_1, teamlist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (playerlist_component_1_1) {
                playerlist_component_1 = playerlist_component_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (teamlist_component_1_1) {
                teamlist_component_1 = teamlist_component_1_1;
            }],
        execute: function() {
            //import {MatchlistComponent} from './match/matchlist.component';
            AppComponent = (function () {
                function AppComponent(_playerService) {
                    this._playerService = _playerService;
                    this.title = 'Most Goal Europameisterschaft 2016';
                    this.viewMode = 'playerlist';
                    this.isLoading = true;
                    this.team = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._playerService.getPlayersFromJson()
                        .then(function (players) {
                        console.log("isLoading... " + JSON.stringify(players));
                        _this.players = players;
                        _this.isLoading = false;
                    }).catch(function (error) { return console.error('Error on loading Players: ' + error); });
                };
                AppComponent.prototype.onTeamChange = function ($event) {
                    this.team.push($event.player);
                    console.log("onteamchange event.....", this.team);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.template.html',
                        styles: ["\n        .nav {\n            cursor: pointer;\n        }\n\n        div.container { \n            padding-top: 70px;  /* because of fixed navbar */ \n        }\n        \n        img.logo {\n            height: 56px;\n            width: auto;\n            margin: 3px 24px;\n        }\n    "],
                        directives: [playerlist_component_1.PlayerlistComponent, teamlist_component_1.TeamlistComponent],
                        providers: [player_service_1.PlayerService]
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map