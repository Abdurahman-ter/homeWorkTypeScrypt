interface IA {
	a: number;
	b: string;
}

interface IB {
	a: number;
	c: boolean;
}

let a: IA = { a: 5, b: "" };
let b: IB = { a: 10, c: true };

type TPI<T, K> = Pick<T, Exclude<keyof T, keyof K>>;

function difference<T extends IA, K extends IB>(
	firstO: T,
	secondO: K,
): TPI<T, K> {
	let objRes: TPI<T, K> = {} as TPI<T, K>;

	for (const key in firstO) {
		if (!Object.hasOwn(secondO, key)) {
			objRes[key] = firstO[key as keyof T];
		}
	}
	return objRes;
}

interface IDifference {
	b: string;
}

let v0: IDifference = difference(a, b);
