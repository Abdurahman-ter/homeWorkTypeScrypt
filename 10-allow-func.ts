class User {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}

function allowFunc(func: Function) {
    return (
        target: object,
        propertyKey: string,
    ) => {
        const privateKey = Symbol(`_${propertyKey}`);

        Object.defineProperty(target, propertyKey, {
            set(num: number) {
                if(func(num)) {
                    this[privateKey] = num
                } else {
                    return
                }
            },

            get() {
                return this[privateKey]
            }
        })
    }
}

const person = new User();
console.log(person.age); // 30

person.age = 0;
console.log(person.age); // 30

person.age = 20;
console.log(person.age); // 20