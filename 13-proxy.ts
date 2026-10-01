const url: string = "https://dummyjson.com/products/1";

interface IProductAPI {
	getProduct(id: number): Promise<IProduct>;
}

interface IProduct {
	id: number;
	[key: string]: unknown; // для остальных полей объекта
}

interface IAPISend {
	getFetch(url: string): Promise<IProduct | undefined>;
}

class API implements IProductAPI {
	async getProduct(id: number): Promise<IProduct> {
		const res = await fetch(`https://dummyjson.com/products/${id}`);
		return res.json() as Promise<IProduct>;
	}
}

class APIProxy implements IProductAPI {
	constructor(private api: IProductAPI) {}

	async getProduct(id: number): Promise<IProduct> {
		if (id >= 10) {
			throw new Error(`id ${id} должен быть меньше 10`);
		}
		return this.api.getProduct(id); // запрос уходит только после проверки
	}
}

const proxy = new APIProxy(new API)

async function main(): Promise<void> {
    try {
        const data = await proxy.getProduct(3)
        console.log(data)

        await proxy.getProduct(15)
    } catch (error) {
        console.log(error instanceof Error ? error.message : error)
    }
}

main()