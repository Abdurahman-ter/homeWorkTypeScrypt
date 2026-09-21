class builderMethod {
	private method!: string;
	private url!: string;
	private body!: object;
	private header!: Record<string, string>;

	addMethod(method: string): builderMethod {
		this.method = method;
		return this;
	}

	addUrl(url: string): builderMethod {
		this.url = url;
		return this;
	}

	addBody(body: object): builderMethod {
		this.body = body;
		return this;
	}

	addHeaders(header: Record<string, string>): builderMethod {
		this.header = header;
		return this;
	}

	async exec(): Promise<void> {
		const res = await fetch(this.url, {
			method: this.method,
			headers: this.header,
			body: JSON.stringify(this.body),
		});

        const data = await res.json()
        return data;
	}
}

console.log(new builderMethod()
  .addMethod('POST')
  .addUrl('https://jsonplaceholder.typicode.com/posts')
  .addBody({ name: 'test' })
  .addHeaders({ 'Content-Type': 'application/json' })
  .exec()
)