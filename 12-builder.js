"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class builderMethod {
    method;
    url;
    body;
    header;
    addMethod(method) {
        this.method = method;
        return this;
    }
    addUrl(url) {
        this.url = url;
        return this;
    }
    addBody(body) {
        this.body = body;
        return this;
    }
    addHeaders(header) {
        this.header = header;
        return this;
    }
    async exec() {
        const res = await fetch(this.url, {
            method: this.method,
            headers: this.header,
            body: JSON.stringify(this.body),
        });
        const data = await res.json();
        return data;
    }
}
console.log(new builderMethod()
    .addMethod('POST')
    .addUrl('https://jsonplaceholder.typicode.com/posts')
    .addBody({ name: 'test' })
    .addHeaders({ 'Content-Type': 'application/json' })
    .exec());
//# sourceMappingURL=12-builder.js.map