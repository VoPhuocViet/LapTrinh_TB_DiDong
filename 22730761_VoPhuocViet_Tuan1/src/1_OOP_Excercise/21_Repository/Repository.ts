// 21. Generic Repository class
class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// Example usage:
// const repo = new Repository<number>();
// repo.add(1);
// repo.add(2);
// console.log(repo.getAll()); // [1, 2]
