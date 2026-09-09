interface Item {
	key: string;
	value: number;
	next: Item | null;
}

class Mapa {
	buckets: (Item | null)[] = [];

	constructor() {
		this.buckets.length = 10;
		this.buckets.fill(null);
	}

	hash(key: string): number {
		let charCodeSum = 0;
		for (const letter of key) {
			charCodeSum += letter.charCodeAt(0);
		}
		return charCodeSum % this.buckets.length;
	}

	set(key: string, value: number): void {
		const index = this.hash(key);
		let current = this.buckets[index];
		if (current === null) {
			this.buckets[index] = { key, value, next: null };
			return;
		}

		while (current) {
			if (current.key === key) {
				current.value = value;
				return;
			}
			if (current.next === null) {
				current.next = { key, value, next: null };
				return;
			}
			current = current.next;
		}
	}

	get(key: string): number | undefined {
		const index = this.hash(key);
		let current = this.buckets[index];

		while (current) {
			if (current.key === key) {
				return current.value;
			}
			current = current.next;
		}
	}

	delete(key: string): void {
		const index = this.hash(key);
		let current = this.buckets[index];
		let previous: Item | null = null;

		if (current === null) {
			return;
		}

		if (current.key === key) {
			this.buckets[index] = current.next;
			return;
		}

		while (current) {
			if (current.key === key) {
				if (previous) {
					previous.next = current.next;
					return;
				}
			}
			previous = current;
			current = current.next;
		}
	}

	clear(): void {
		this.buckets.fill(null);
	}
}

const map = new Mapa();

map.set("cat", 1);
map.set("dog", 2);
map.set("bird", 3);

console.log(map.get("cat"));   // 1
console.log(map.get("dog"));   // 2n

map.delete("dog");

console.log(map.get("dog"));   // undefined
console.log(map.get("bird"));  // 3

map.clear();

console.log(map.get("cat"));   // undefined
