interface IUser {
	name: string;
	age: number;
	skills: string[];
}

const user: IUser = {
	name: "Vasiliy",
	age: 8,
	skills: ["typescript", "javascript"],
};

function pickObjectKeys<T extends IUser, K extends keyof T>(
	obj: T,
	arr: K[],
): {} {
	let resultObj = {};
	const arrObj = [];
	for (const element of arr) {
		arrObj.push([element, obj[element]]);
	}
	resultObj = Object.fromEntries(arrObj);
	return resultObj;
}

console.log(pickObjectKeys(user, ["age", "name"]));
