"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    id;
    _balance;
    createdAt;
    constructor(id, balance) {
        this.id = id;
        this._balance = balance;
        this.createdAt = new Date();
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        this._balance = amount;
    }
}
exports.Account = Account;
