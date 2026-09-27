"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = "https://dummyjson.com/products/1";
class API {
    async getFetch(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
}
class APIProxy {
    async getFetch(url) {
        const res = await fetch(url);
        const data = await res.json();
        if (data.id > 10) {
            return data;
        }
        else {
            throw new Error("айди меньше 10");
        }
    }
}
console.log(new APIProxy().getFetch(url));
//# sourceMappingURL=13-proxy.js.map