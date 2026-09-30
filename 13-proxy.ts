const url: string = "https://dummyjson.com/products/1"

interface IProduct {
    id: number;
    [key: string]: unknown; // для остальных полей объекта
}

interface IAPISend {
    getFetch(url: string): Promise<IProduct | undefined>;
}

class API implements IAPISend {
    async getFetch(url: string): Promise<IProduct> {
        const res = await fetch(url)

        const data = await res.json()
        return data
    }
}

class APIProxy implements IAPISend {
    constructor(private Api: IAPISend) {};

    async getFetch(url: string): Promise<IProduct | undefined> {
        const data2 = await this.Api.getFetch(url)
        if(data2!.id < 10) {
            throw new Error("айди больше 10")
        } else {
            return data2
        }
    }
}

const myApi = new APIProxy(new API)
console.log(myApi.getFetch(url))