"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var bug_service_1 = require("./bug.service");
var BugListComponent = (function () {
    function BugListComponent(_bugService) {
        this._bugService = _bugService;
        this.bugList = [];
    }
    BugListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bugService.getBugList()
            .subscribe(function (bugData) { return _this.bugList = bugData; });
    };
    return BugListComponent;
}());
BugListComponent = __decorate([
    core_1.Component({
        selector: 'bug-list',
        templateUrl: './bug-list.component.html',
        providers: [bug_service_1.BugService]
    }),
    __metadata("design:paramtypes", [bug_service_1.BugService])
], BugListComponent);
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug-list.component.js.map