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
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    age;
}
__decorate([
    allowFunc((a) => a > 0),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
function allowFunc(func) {
    return (target, properityKey) => {
        let value;
        Object.defineProperty(target, properityKey, {
            set(num) {
                if (func(num)) {
                    value = num;
                }
                else {
                    return;
                }
            },
            get() {
                return value;
            }
        });
    };
}
const person = new User();
console.log(person.age); // 30
person.age = 30;
console.log(person.age); // 30
person.age = 0;
console.log(person.age); // 30
person.age = 20;
console.log(person.age); // 20
//# sourceMappingURL=10-allow-func.js.map