"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Vasiliy",
    age: 8,
    skills: ["typescript", "javascript"],
};
function pickObjectKeys(obj, arr) {
    let resultObj = {};
    const arrObj = [];
    for (const element of arr) {
        arrObj.push([element, obj[element]]);
    }
    resultObj = Object.fromEntries(arrObj);
    return resultObj;
}
console.log(pickObjectKeys(user, ["age", "name"]));
//# sourceMappingURL=8-pick.js.map