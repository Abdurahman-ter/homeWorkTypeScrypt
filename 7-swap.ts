const obj: Record<string, number> = {
  a: 1,
  b: 2
}

function swapKeysAndValues<T extends Record<string, number>>(obj: T): Record<number, string> {
    let arrObj: [string, number][];
    arrObj = Object.entries(obj)

    let arrRev: [number, string][] = arrObj.map((arr) => {
        const key: string = arr[0];
        const value: number = arr[1]

        const newArr:[number, string] = [value, key]
        return newArr
        
    })
    
    const resObj: Record<number, string> = Object.fromEntries(arrRev)
    return resObj
}

console.log(swapKeysAndValues(obj))
