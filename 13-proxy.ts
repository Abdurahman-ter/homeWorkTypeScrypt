const url: string = "https://dummyjson.com/products/1"

interface IAPISend {
    getFetch(url: string): object;
}

class API implements IAPISend {
    async getFetch(url: string): Promise<object> {
        const res = await fetch(url)

        const data = await res.json()
        return data
    }
}

class APIProxy implements IAPISend {
    async getFetch(url: string): Promise<object | undefined> {
        const res = await fetch(url)

        const data = await res.json()
        if(data.id > 10) {
            return data
        } else {
            throw new Error("айди меньше 10")
        }
    }
}

console.log(new APIProxy().getFetch(url))