System.register(['angular2/core', '../shared/favorite.component', '../shared/bootstrap.media.component', './player.service', './playerdetails.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, bootstrap_media_component_1, player_service_1, playerdetails_component_1;
    var PlayerlistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (bootstrap_media_component_1_1) {
                bootstrap_media_component_1 = bootstrap_media_component_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (playerdetails_component_1_1) {
                playerdetails_component_1 = playerdetails_component_1_1;
            }],
        execute: function() {
            PlayerlistComponent = (function () {
                function PlayerlistComponent(_playerService) {
                    this._playerService = _playerService;
                    this.title = "Spielerliste";
                    this.description = "Wähle deine Spieler aus:";
                    this.isLoading = true;
                    this.players = [];
                }
                PlayerlistComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._playerService.getPlayersFromJson()
                        .then(function (players) {
                        console.log("isLoading... " + JSON.stringify(players));
                        _this.players = players;
                        _this.isLoading = false;
                    }).catch(function (error) { return console.error('Error on loading Players: ' + error); });
                };
                PlayerlistComponent.prototype.onSelect = function (player) {
                    this.selectedPlayer = player;
                };
                PlayerlistComponent.prototype.onFavoriteChange = function ($event) {
                    this.selectedPlayerName = $event.name;
                    console.log("id: ", $event.id, " name: ", $event.name, " isFavorite: ", $event.isFavorite);
                    /*
                            // test if is already there -> remove, else add
                            console.log("onFavoriteChange...", $event);
                      
                            console.log("team before: ", this.team);
                            
                            
                            //besser: nur die id und isFavorite emitten
                            // dann den player holen und hinzufügen,
                            // oder entfernen, abhängig von isFavorite
                            
                              
                            this._teamService.addToTeam({id: $event.id, name: $event.name, isFavorite: $event.isFavorite});
                            
                            console.log("team after: ", this.team);
                    */
                };
                PlayerlistComponent = __decorate([
                    core_1.Component({
                        selector: 'playerlist',
                        templateUrl: './app/players/playerlist.component.html',
                        styles: ["\n                li {\n                    list-style-type: none;\n                }\n                li:hover {\n                    background-color: rgba(178, 219, 251, 0.4);\n                }\n                .selected {\n                    background-color: rgba(178, 219, 251, 0.8);\n                }\n            "],
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_media_component_1.BootstrapMedia, playerdetails_component_1.PlayerdetailsComponent],
                        providers: [player_service_1.PlayerService]
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService])
                ], PlayerlistComponent);
                return PlayerlistComponent;
            }());
            exports_1("PlayerlistComponent", PlayerlistComponent);
        }
    }
});
//# sourceMappingURL=playerlist.component.js.map