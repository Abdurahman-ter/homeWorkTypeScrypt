class User {
  @allowFunc((a: number) => a > 0)
  age!: number;
}

function allowFunc(func: Function) {
    return (
        target: object,
        properityKey: string,
    ) => {
        let value!: number;

        Object.defineProperty(target, properityKey, {
            set(num: number) {
                if(func(num)) {
                    value = num
                } else {
                    return
                }
            },

            get() {
                return value
            }
        })
    }
}

const person = new User();
console.log(person.age); // 30

person.age = 30;
console.log(person.age); // 30

person.age = 0;
console.log(person.age); // 30

person.age = 20;
console.log(person.age); // 20