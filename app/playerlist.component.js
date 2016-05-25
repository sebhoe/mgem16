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
            function (players_service_1_1) {
                players_service_1 = players_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PlayerlistComponent = (function () {
                function PlayerlistComponent(_playersService) {
                    this._playersService = _playersService;
                    this.showFavoritesOnly = false;
                    this.isLoading = true;
                }
                PlayerlistComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.players = this._playersService.getPlayersFromJson()
                        .then(function (players) {
                        _this.showFavoritesOnly ?
                            _this.players = players.filter(function (player) { return player.isFavorite; })
                            :
                                _this.players = players;
                        console.log("isLoading... " + JSON.stringify(players));
                        _this.isLoading = false;
                    });
                    //continue.....
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlayerlistComponent.prototype, "showFavoritesOnly", void 0);
                PlayerlistComponent = __decorate([
                    core_1.Component({
                        selector: 'playerlist',
                        template: "\n            <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n            <div *ngIf=\"players.length == 0\">\n                Keine Spieler ausgew\u00E4hlt.\n            </div>\n            <div *ngIf=\"players.length > 0\">            \n                <ul>\n                <li *ngFor=\"#player of players\">\n                    <bs-media>\n                        <favorite \n                            class=\"icon\"\n                            [object]=\"player\"\n                            [isFavorite]=\"player.isFavorite\">\n                        </favorite>\n                        <img class=\"media-object image\" \n                            src=\"http://lorempixel.com/50/50/cats/?v={{player.id}}\" \n                            alt=\"{{player.id}} - {{player.name}}\">\n                        <div class=\"heading\">{{player.name}}</div>\n                        <div class=\"info\">weitere Infos...</div>\n                    </bs-media>\n                </li>\n                </ul>  \n            </div>\n            ",
                        styles: ["\n                li {\n                list-style-type: none;\n                }\n            "],
                        directives: [favorite_component_1.FavoriteComponent, bootstrap_media_component_1.BootstrapMedia],
                        providers: [players_service_1.PlayersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [players_service_1.PlayersService])
                ], PlayerlistComponent);
                return PlayerlistComponent;
            }());
            exports_1("PlayerlistComponent", PlayerlistComponent);
        }
    }
});
//# sourceMappingURL=playerlist.component.js.map