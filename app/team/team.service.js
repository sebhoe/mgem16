System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TeamService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TeamService = (function () {
                function TeamService() {
                    this.team = [];
                }
                TeamService.prototype.getTeam = function () {
                    return this.team;
                };
                TeamService.prototype.addToTeam = function (player) {
                    return this.team.push(player);
                };
                TeamService.prototype.removeFromTeam = function (player) {
                    var index = this.team.indexOf(player, 0);
                    if (index > -1) {
                        this.team.splice(index, 1);
                    }
                    return this.team.length;
                };
                TeamService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TeamService);
                return TeamService;
            }());
            exports_1("TeamService", TeamService);
        }
    }
});
//# sourceMappingURL=team.service.js.map