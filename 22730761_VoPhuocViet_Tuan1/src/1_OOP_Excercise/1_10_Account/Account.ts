export class Account {
  public id: number;
  private _balance: number;
  readonly createdAt: Date;

  constructor(id: number, balance: number) {
    this.id = id;
    this._balance = balance;
    this.createdAt = new Date();
  }

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    this._balance = amount;
  }
}
