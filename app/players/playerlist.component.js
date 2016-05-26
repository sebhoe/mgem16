System.register(['angular2/core', '../shared/favorite.component', '../shared/bootstrap.media.component', './playerdetails.component', '../team/team.service'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, bootstrap_media_component_1, playerdetails_component_1, team_service_1;
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
            function (playerdetails_component_1_1) {
                playerdetails_component_1 = playerdetails_component_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            }],
        execute: function() {
            PlayerlistComponent = (function () {
                function PlayerlistComponent(_teamService) {
                    this._teamService = _teamService;
                    this.title = "Spielerliste";
                    this.description = "Wähle deine Spieler aus:";
                    this.isLoading = true;
                    this.numberOfPlayersInTeam = 0;
                    this.teamChange = new core_1.EventEmitter();
                }
                PlayerlistComponent.prototype.onSelect = function (player) {
                    this.selectedPlayer = player;
                };
                PlayerlistComponent.prototype.onFavoriteChange = function ($event) {
                    console.log("id: ", $event.id, " name: ", $event.name, " isFavorite: ", $event.isFavorite);
                    // test if is already there -> remove, else add
                    this.numberOfPlayersInTeam = this._teamService.addToTeam($event.object);
                    console.log(this.numberOfPlayersInTeam);
                    this.teamChange.emit({
                        player: $event.object,
                        addToTeam: $event.isFavorite
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlayerlistComponent.prototype, "players", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PlayerlistComponent.prototype, "teamChange", void 0);
                PlayerlistComponent = __decorate([
                    core_1.Component({
                        selector: 'playerlist',
                        templateUrl: './app/players/playerlist.component.html',
                        styles: ["\n                li {\n                    list-style-type: none;\n                }\n                li:hover {\n                    background-color: rgba(178, 219, 251, 0.4);\n                }\n                .selected {\n                    background-color: rgba(178, 219, 251, 0.8);\n                }\n            "],
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_media_component_1.BootstrapMedia, playerdetails_component_1.PlayerdetailsComponent],
                        providers: [team_service_1.TeamService]
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService])
                ], PlayerlistComponent);
                return PlayerlistComponent;
            }());
            exports_1("PlayerlistComponent", PlayerlistComponent);
        }
    }
});
//# sourceMappingURL=playerlist.component.js.map