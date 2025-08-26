// 15. Library class that can store Book and User objects
class Book {
    constructor(public title: string, public author: string) {}
}

class User {
    constructor(public name: string) {}
}

class Library {
    books: Book[] = [];
    users: User[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    addUser(user: User): void {
        this.users.push(user);
    }
}

// Demo
const library = new Library();
library.addBook(new Book('1984', 'George Orwell'));
library.addUser(new User('John Doe'));
console.log(library.books);
console.log(library.users);
