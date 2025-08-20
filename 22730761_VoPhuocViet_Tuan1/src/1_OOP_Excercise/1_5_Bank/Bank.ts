class BankAccount {
  balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  // Gửi tiền vào tài khoản
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Nap them: ${amount}. So du moi: ${this.balance}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  // Rút tiền khỏi tài khoản
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Rut tien: ${amount}. So du moi: ${this.balance}`);
    } else if (amount > this.balance) {
      console.log("So du khong du.");
    } else {
      console.log("So tien rut phai lon hon 0.");
    }
  }

  // Xem số dư
  checkBalance(): void {
    console.log(`So du hien tai: ${this.balance}`);
  }
}

// --- Test ---
const acc1 = new BankAccount(100);
acc1.checkBalance(); 
acc1.deposit(50);     
acc1.withdraw(70);    
acc1.withdraw(200);   
