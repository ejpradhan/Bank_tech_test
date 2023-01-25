class Account{
  constructor() {
      this.balance = 0;

      this.transactions = []
  }

 submitTransaction(date,amount){
  this.balance += amount;
  const transaction = {
    date: date,
    amount: amount,
    balance: this.balance
  }
  this.transactions.push(transaction);
}


}

module.exports = Account;