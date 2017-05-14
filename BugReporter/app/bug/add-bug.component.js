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
var bug_type_1 = require("./bug.type");
var AddBugComponent = (function () {
    function AddBugComponent(_bugService) {
        this._bugService = _bugService;
    }
    AddBugComponent.prototype.onSubmit = function (formValue) {
        var bugModel = new bug_type_1.BugModel();
        bugModel.Title = formValue.title;
        bugModel.Description = formValue.description;
        console.log(formValue);
        this._bugService.createBug(bugModel);
    };
    return AddBugComponent;
}());
AddBugComponent = __decorate([
    core_1.Component({
        selector: 'add-bug',
        templateUrl: './add-bug.component.html',
        providers: [bug_service_1.BugService]
    }),
    __metadata("design:paramtypes", [bug_service_1.BugService])
], AddBugComponent);
exports.AddBugComponent = AddBugComponent;
//# sourceMappingURL=add-bug.component.js.map