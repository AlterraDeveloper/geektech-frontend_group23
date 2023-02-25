export function AccountF(accNo, curr, balance) {
  this.accountNo = accNo;
  this.currency = curr;
  this.currentBalance = balance;
}

export class AccountC {
  constructor(accNo, curr, balance) {
    this.accountNo = accNo;
    this.currency = curr;
    this.currentBalance = balance;
  }
}
