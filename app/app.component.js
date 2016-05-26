System.register(['angular2/core', 'angular2/router', './players/playerlist.component', './players/player.service'], function(exports_1, context_1) {
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
    var core_1, router_1, playerlist_component_1, player_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (playerlist_component_1_1) {
                playerlist_component_1 = playerlist_component_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_playerService) {
                    this._playerService = _playerService;
                    this.title = 'Most Goal Europameisterschaft 2016';
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/players', name: 'Playerlist', component: playerlist_component_1.PlayerlistComponent, useAsDefault: true },
                        //    { path: '/team', name: 'Teamlist', component: TeamlistComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Playerlist'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.template.html',
                        styles: ["\n        .nav {\n            cursor: pointer;\n        }\n\n        div.container { \n            padding-top: 70px;  /* because of fixed navbar */ \n        }\n        \n        img.logo {\n            height: 56px;\n            width: auto;\n            margin: 3px 24px;\n        }\n    "],
                        directives: [playerlist_component_1.PlayerlistComponent, router_1.ROUTER_DIRECTIVES],
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