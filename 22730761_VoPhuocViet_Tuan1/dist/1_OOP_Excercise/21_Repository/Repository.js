"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 21. Generic Repository class
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Example usage:
// const repo = new Repository<number>();
// repo.add(1);
// repo.add(2);
// console.log(repo.getAll()); // [1, 2]
