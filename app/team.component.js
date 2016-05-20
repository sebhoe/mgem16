System.register(['angular2/core', './players.service', 'angular2/http', './favorite.component', './bootstrap.media.component', './filterpipe'], function(exports_1, context_1) {
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
    var core_1, players_service_1, http_1, favorite_component_1, bootstrap_media_component_1, filterpipe_1;
    var TeamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (bootstrap_media_component_1_1) {
                bootstrap_media_component_1 = bootstrap_media_component_1_1;
            },
            function (filterpipe_1_1) {
                filterpipe_1 = filterpipe_1_1;
            }],
        execute: function() {
            TeamComponent = (function () {
                function TeamComponent(_playersService) {
                    this._playersService = _playersService;
                    this.players = [];
                }
                TeamComponent.prototype.ngOnInit = function () {
                    this.players = this._playersService.getPlayers()
                        .filter(function (player) { return player.isFavorite; });
                };
                TeamComponent = __decorate([
                    core_1.Component({
                        selector: 'team',
                        template: "\n        <h3>Team</h3>\n        <div *ngIf=\"players.length > 0\">\n            Hier kommt dein Team hin.\n           <br/>\n           (am besten in neue componente playerlist auslagern....)\n           <br/>\n           \n           <ul>\n              <li *ngFor=\"#player of players\">\n                <bs-media [hidden]=\"!player.isFavorite\">\n                    <favorite \n                        class=\"icon\"\n                        [object]=\"player\"\n                        [isFavorite]=\"player.isFavorite\">\n                    </favorite>\n                    <img class=\"media-object image\" \n                        src=\"http://lorempixel.com/50/50/cats/?v={{player.id}}\" \n                        alt=\"{{player.id}} - {{player.name}}\">\n                    <div class=\"heading\">{{player.name}}</div>\n                    <div class=\"info\">weitere Infos...</div>\n                </bs-media>\n              </li>\n            </ul>\n                         \n        </div>\n        <div *ngIf=\"players.length == 0\">\n            Du hast noch keine Spieler f\u00FCr dein Team ausgew\u00E4hlt.\n        </div>\n    ",
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_media_component_1.BootstrapMedia],
                        pipes: [filterpipe_1.FavoriteFilterPipe],
                        providers: [players_service_1.PlayersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [players_service_1.PlayersService])
                ], TeamComponent);
                return TeamComponent;
            }());
            exports_1("TeamComponent", TeamComponent);
        }
    }
});
//# sourceMappingURL=team.component.js.map