enum nameSortBy {
	id = "id",
	date = "date",
}
enum Direction {
	up = "up",
	down = "down",
}

class saveDate {
	id: number;
	date: Date;
	title: string;
	constructor(id: number, date: Date, title: string) {
		this.id = id;
		this.date = date;
		this.title = title;
	}
}

class saveServes {
	serves: saveDate[] = [];
	// nameSortBy!: nameSortBy;
	// direction!: Direction;

	constructor(
		public nameSortBy: nameSortBy,
		public direction: Direction,
	) {}

	public sortServes(sortBy: nameSortBy, direction: Direction) {
		if (sortBy === nameSortBy.id) {
			if ((direction === Direction.up)) {
				this.serves = this.serves.sort((a, b) => {
					if (a.id > b.id) {
						return 1;
					} else if (a.id < b.id) {
						return -1;
					} else {
						return 0;
					}
				});
			} else {
				this.serves = this.serves.sort((a, b) => {
					if (a.id < b.id) {
						return 1;
					} else if (a.id > b.id) {
						return -1;
					} else {
						return 0;
					}
				});
			}
		} else {
			if ((direction === Direction.up)) {
				this.serves = this.serves.sort((a, b) => {
					if (a.date.getTime() > b.date.getTime()) {
						return 1;
					} else if (a.date.getTime() < b.date.getTime()) {
						return -1;
					} else {
						return 0;
					}
				});
			} else {
				this.serves = this.serves.sort((a, b) => {
					if (a.date.getTime() < b.date.getTime()) {
						return 1;
					} else if (a.date.getTime() > b.date.getTime()) {
						return -1;
					} else {
						return 0;
					}
				});
			}
		}
	}

	public addSave(object: saveDate) {
		this.serves.push(object);
	}

	public getServes() {
		return this.serves;
	}

	public getIterator() {
		return new iteratobyPriority(this, this.nameSortBy, this.direction);
	}
}

interface IIterator<Task> {
	current(): Task | undefined;
	next(): Task | undefined;
	prev(): Task | undefined;
}

class iteratobyPriority implements IIterator<saveDate> {
	private index: number = 0;
	public server: saveServes;

	constructor(
		server: saveServes,
		public nameSortBy: nameSortBy,
		public direction: Direction,
	) {
		this.server = server;
		this.server.sortServes(nameSortBy, direction);
		this.server.nameSortBy = nameSortBy;
		this.server.direction = direction;
	}

	current(): saveDate | undefined {
		return this.server.getServes()[this.index];
	}
	next(): saveDate | undefined {
		this.index++;
		return this.server.getServes()[this.index];
	}
	prev(): saveDate | undefined {
		this.index--;
		return this.server.getServes()[this.index];
	}
}

const date1 = new Date("2021-05-20");
const date2 = new Date("2025-05-20");
const date3 = new Date("2023-05-20");

const taskList = new saveServes(nameSortBy.date, Direction.up);
taskList.addSave(new saveDate(2, date1, "first"));
taskList.addSave(new saveDate(3, date2, "second"));
taskList.addSave(new saveDate(1, date3, "third"));
const iterator = taskList.getIterator();
console.log(iterator.current())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.prev())
