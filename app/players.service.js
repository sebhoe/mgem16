System.register(['angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var PlayersService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlayersService = (function () {
                function PlayersService(_http) {
                    this._http = _http;
                    //    private _url = "http://jsonplaceholder.typicode.com/posts";
                    this._url = "app/assets/api/playersDBfile.json";
                }
                PlayersService.prototype.getPlayersFromJson = function () {
                    return this._http.get(this._url)
                        .map(function (response) { return response.json(); })
                        .toPromise();
                };
                /*  TODO: get players from DB (mongo?)
                    getPlayers() {
                        return [];
                    }
                */
                PlayersService.prototype.createPlayer = function (player) {
                    return this._http.post(this._url, JSON.stringify(player))
                        .map(function (res) { return res.json(); });
                };
                PlayersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PlayersService);
                return PlayersService;
            }());
            exports_1("PlayersService", PlayersService);
        }
    }
});
//# sourceMappingURL=players.service.js.map