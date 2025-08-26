"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 15. Library class that can store Book and User objects
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Library {
    books = [];
    users = [];
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
}
// Demo
const library = new Library();
library.addBook(new Book('1984', 'George Orwell'));
library.addUser(new User('John Doe'));
console.log(library.books);
console.log(library.users);
