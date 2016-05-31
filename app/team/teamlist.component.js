System.register(['@angular/core', '../shared/favorite.component', '../shared/bootstrap.media.component', './team.service', '../players/playerdetails.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, bootstrap_media_component_1, team_service_1, playerdetails_component_1;
    var TeamlistComponent;
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
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            },
            function (playerdetails_component_1_1) {
                playerdetails_component_1 = playerdetails_component_1_1;
            }],
        execute: function() {
            TeamlistComponent = (function () {
                function TeamlistComponent(_teamService) {
                    this._teamService = _teamService;
                    this.title = "Mannschaftskader";
                    this.description = "So sieht dein Kader aus:";
                    this.isLoading = true;
                    this.teamChange = new core_1.EventEmitter();
                }
                TeamlistComponent.prototype.ngOnInit = function () {
                    console.log("teamlist.comp.oninit ... ", this.team);
                };
                TeamlistComponent.prototype.ngOnChanges = function () {
                    console.log("teamlist -> ngOnChanges() ... ", this.team);
                };
                TeamlistComponent.prototype.onFavoriteChange = function ($event) {
                    console.log("teamlist -> onFavoriteChange() ... ", $event, " name", $event.name);
                    this.teamChange.emit($event);
                };
                TeamlistComponent.prototype.onSelect = function (player) {
                    this.selectedPlayer = player;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TeamlistComponent.prototype, "team", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TeamlistComponent.prototype, "teamChange", void 0);
                TeamlistComponent = __decorate([
                    core_1.Component({
                        selector: 'teamlist',
                        templateUrl: './app/team/teamlist.component.html',
                        styleUrls: ['./app/shared/playerlist.css'],
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_media_component_1.BootstrapMedia, playerdetails_component_1.PlayerdetailsComponent],
                        providers: [team_service_1.TeamService]
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService])
                ], TeamlistComponent);
                return TeamlistComponent;
            }());
            exports_1("TeamlistComponent", TeamlistComponent);
        }
    }
});
//# sourceMappingURL=teamlist.component.js.map