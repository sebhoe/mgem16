System.register(['angular2/core', './favorite.component', './bootstrap.media.component', './players.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, bootstrap_media_component_1, players_service_1, http_1;
    var PlayersComponent;
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
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PlayersComponent = (function () {
                function PlayersComponent(_playersService) {
                    this._playersService = _playersService;
                    this.title = "Spieler";
                    this.description = "Hier kommt die Spielerliste hin";
                    this.isLoading = true;
                }
                PlayersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.players = this._playersService.getPlayers();
                    this._playersService.getPosts()
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[0].id);
                    });
                };
                PlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'players',
                        template: "\n            <h3>{{title}}</h3>\n            <span>{{description}}</span>\n            <div *ngIf=\"isLoading\">Spielerliste wird geladen ...</div>\n            <ul>\n              <li *ngFor=\"#player of players\">\n                <bs-media>\n                    <favorite \n                        class=\"icon\"\n                        [object]=\"player\"\n                        [isFavorite]=\"player.isFavorite\">\n                    </favorite>\n                    <img class=\"media-object image\" \n                        src=\"http://lorempixel.com/50/50/cats/?v={{player.id}}\" \n                        alt=\"{{player.id}} - {{player.name}}\">\n                    <div class=\"heading\">{{player.name}}</div>\n                    <div class=\"info\">weitere Infos...</div>\n                </bs-media>\n              </li>\n            </ul>  \n            ",
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_media_component_1.BootstrapMedia],
                        providers: [players_service_1.PlayersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [players_service_1.PlayersService])
                ], PlayersComponent);
                return PlayersComponent;
            }());
            exports_1("PlayersComponent", PlayersComponent);
        }
    }
});
//# sourceMappingURL=players.component.js.map