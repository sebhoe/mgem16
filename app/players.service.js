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
                    return [
                        { id: 1, name: "Manuel Neuer", isFavorite: true },
                        { id: 3, name: "Mats Hummels", isFavorite: false },
                        { id: 7, name: "Toni Kroos", isFavorite: false },
                        { id: 11, name: "Thomas Müller", isFavorite: true },
                        { id: 13, name: "Mario Gomez", isFavorite: false }
                    ];
                };
                return PlayersService;
            }());
            exports_1("PlayersService", PlayersService);
        }
    }
});
//# sourceMappingURL=players.service.js.map