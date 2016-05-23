System.register(['angular2/core', './selectionlist.component', './teamlist.component', './players.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, selectionlist_component_1, teamlist_component_1, players_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (selectionlist_component_1_1) {
                selectionlist_component_1 = selectionlist_component_1_1;
            },
            function (teamlist_component_1_1) {
                teamlist_component_1 = teamlist_component_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_playersService) {
                    this._playersService = _playersService;
                    this.title = 'Most Goal Europameisterschaft 2016';
                    this.viewMode = 'selection';
                    this.isLoading = true;
                    this.players = this._playersService.getPlayersFromJson();
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.players.subscribe(function (players) {
                        _this.players = players;
                        _this.isLoading = false;
                        console.log("isLoading... " + JSON.stringify(players));
                    }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Loading players from json file Completed!'); });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "players", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.template.html',
                        styleUrls: ['app/app.style.css'],
                        directives: [selectionlist_component_1.SelectionlistComponent, teamlist_component_1.TeamlistComponent],
                        providers: [players_service_1.PlayersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [players_service_1.PlayersService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map