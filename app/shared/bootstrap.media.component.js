System.register(['@angular/core'], function(exports_1, context_1) {
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
    var BootstrapMedia;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BootstrapMedia = (function () {
                function BootstrapMedia() {
                }
                BootstrapMedia = __decorate([
                    core_1.Component({
                        selector: 'bs-media',
                        template: "\n        <div class=\"media\">\n            <div class=\"media-left media-middle\">\n                <ng-content select=\".icon\"></ng-content>\n            </div>\n            <div class=\"media-left media-middle\">\n                <ng-content select=\".image\"></ng-content>\n            </div> \n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    <ng-content select=\".heading\"></ng-content>\n                </h4>\n                <span>\n                    <ng-content select=\".info\"></ng-content>\n                </span>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BootstrapMedia);
                return BootstrapMedia;
            }());
            exports_1("BootstrapMedia", BootstrapMedia);
        }
    }
});
//# sourceMappingURL=bootstrap.media.component.js.map