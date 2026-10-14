"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nameSortBy;
(function (nameSortBy) {
    nameSortBy["id"] = "id";
    nameSortBy["date"] = "date";
})(nameSortBy || (nameSortBy = {}));
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
})(Direction || (Direction = {}));
class saveDate {
    id;
    date;
    title;
    constructor(id, date, title) {
        this.id = id;
        this.date = date;
        this.title = title;
    }
}
class saveServes {
    nameSortBy;
    direction;
    serves = [];
    // nameSortBy!: nameSortBy;
    // direction!: Direction;
    constructor(nameSortBy, direction) {
        this.nameSortBy = nameSortBy;
        this.direction = direction;
    }
    sortServes(sortBy, direction) {
        if (sortBy === nameSortBy.id) {
            if ((direction === Direction.up)) {
                this.serves = this.serves.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1;
                    }
                    else if (a.id < b.id) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
                this.serves = this.serves.sort((a, b) => {
                    if (a.id < b.id) {
                        return 1;
                    }
                    else if (a.id > b.id) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }
        else {
            if ((direction === Direction.up)) {
                this.serves = this.serves.sort((a, b) => {
                    if (a.date.getTime() > b.date.getTime()) {
                        return 1;
                    }
                    else if (a.date.getTime() < b.date.getTime()) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
                this.serves = this.serves.sort((a, b) => {
                    if (a.date.getTime() < b.date.getTime()) {
                        return 1;
                    }
                    else if (a.date.getTime() > b.date.getTime()) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }
    }
    addSave(object) {
        this.serves.push(object);
    }
    getServes() {
        return this.serves;
    }
    getIterator() {
        return new iteratobyPriority(this, this.nameSortBy, this.direction);
    }
}
class iteratobyPriority {
    nameSortBy;
    direction;
    index = 0;
    server;
    constructor(server, nameSortBy, direction) {
        this.nameSortBy = nameSortBy;
        this.direction = direction;
        this.server = server;
        this.server.sortServes(nameSortBy, direction);
        this.server.nameSortBy = nameSortBy;
        this.server.direction = direction;
    }
    current() {
        return this.server.getServes()[this.index];
    }
    next() {
        this.index++;
        return this.server.getServes()[this.index];
    }
    prev() {
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
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
//# sourceMappingURL=14-iterator.js.map