"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
// Example usage:
const user = new User("Charlie");
console.log(user.name); // Output: Charlie
user.name = "Dave";
console.log(user.name); // Output: Dave
