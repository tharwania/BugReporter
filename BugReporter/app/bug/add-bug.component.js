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
var router_1 = require("@angular/router");
var bug_service_1 = require("./bug.service");
var bug_type_1 = require("./bug.type");
var AddBugComponent = (function () {
    function AddBugComponent(_bugService, _route) {
        this._bugService = _bugService;
        this._route = _route;
        this.bug = new bug_type_1.BugModel(0, "", "");
    }
    AddBugComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        if (id != undefined) {
            this._bugService.getBugById(id)
                .subscribe(function (bugData) { return _this.bug = bugData; });
        }
    };
    AddBugComponent.prototype.onSubmit = function (formValue) {
        var result = this._bugService.createBug(this.bug)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    return AddBugComponent;
}());
AddBugComponent = __decorate([
    core_1.Component({
        selector: 'add-bug',
        templateUrl: './add-bug.component.html',
        providers: [bug_service_1.BugService]
    }),
    __metadata("design:paramtypes", [bug_service_1.BugService, router_1.ActivatedRoute])
], AddBugComponent);
exports.AddBugComponent = AddBugComponent;
//# sourceMappingURL=add-bug.component.js.map