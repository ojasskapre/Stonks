"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var users_1 = require("./users");
var RegFormComponent = (function () {
    function RegFormComponent() {
        this.user = new users_1.User('ojas', 'ojas123', 9876543212, 'ojas.kapre@somaiya.edu');
        this.submitted = false;
    }
    RegFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    return RegFormComponent;
}());
RegFormComponent = __decorate([
    core_1.Component({
        selector: 'reg_form',
        templateUrl: './app/register.component.html'
    })
], RegFormComponent);
exports.RegFormComponent = RegFormComponent;
//# sourceMappingURL=register.component.js.map