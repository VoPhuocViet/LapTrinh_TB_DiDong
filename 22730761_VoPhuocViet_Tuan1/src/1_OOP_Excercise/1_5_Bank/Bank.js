var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    // Gửi tiền vào tài khoản
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Nap them: ".concat(amount, ". So du moi: ").concat(this.balance));
        }
        else {
            console.log("Deposit amount must be greater than 0.");
        }
    };
    // Rút tiền khỏi tài khoản
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Rut tien: ".concat(amount, ". So du moi: ").concat(this.balance));
        }
        else if (amount > this.balance) {
            console.log("So du khong du.");
        }
        else {
            console.log("So tien rut phai lon hon 0.");
        }
    };
    // Xem số dư
    BankAccount.prototype.checkBalance = function () {
        console.log("So du hien tai: ".concat(this.balance));
    };
    return BankAccount;
}());
// --- Test ---
var acc1 = new BankAccount(100);
acc1.checkBalance();
acc1.deposit(50);
acc1.withdraw(70);
acc1.withdraw(200);
