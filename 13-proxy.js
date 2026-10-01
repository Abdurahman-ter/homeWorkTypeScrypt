"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = "https://dummyjson.com/products/1";
class API {
    async getProduct(id) {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        return res.json();
    }
}
class APIProxy {
    api;
    constructor(api) {
        this.api = api;
    }
    async getProduct(id) {
        if (id >= 10) {
            throw new Error(`id ${id} должен быть меньше 10`);
        }
        return this.api.getProduct(id); // запрос уходит только после проверки
    }
}
const proxy = new APIProxy(new API);
async function main() {
    try {
        const data = await proxy.getProduct(3);
        console.log(data);
        await proxy.getProduct(15);
    }
    catch (error) {
        console.log(error instanceof Error ? error.message : error);
    }
}
main();
//# sourceMappingURL=13-proxy.js.map