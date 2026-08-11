"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    a: 1,
    b: 2
};
function swapKeysAndValues(obj) {
    let arrObj;
    arrObj = Object.entries(obj);
    let arrRev = arrObj.map((arr) => {
        const key = arr[0];
        const value = arr[1];
        const newArr = [value, key];
        return newArr;
    });
    const resObj = Object.fromEntries(arrRev);
    return resObj;
}
console.log(swapKeysAndValues(obj));
//Record<number, string>
//for (const arr of arrObj) {
//        arr.reverse()
//    }
//# sourceMappingURL=7-swap.js.map