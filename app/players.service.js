System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlayersService;
    return {
        setters:[],
        execute: function() {
            PlayersService = (function () {
                function PlayersService() {
                }
                PlayersService.prototype.getPlayers = function () {
                    return ["Spieler Name 1",
                        "Spieler Name 2",
                        "Spieler Name 3",
                        "Spieler Name 4",
                        "Spieler Name 5"];
                };
                return PlayersService;
            }());
            exports_1("PlayersService", PlayersService);
        }
    }
});
//# sourceMappingURL=players.service.js.map