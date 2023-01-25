class Transaction{
  constructor(account){
      this.account = account
  }

  dateNow(){
      const date = new Date
      return date.toLocaleString().split(',')[0]
  }

  deposit(amount){
      this.account.submitTransaction(this.dateNow(), amount )
  }

  withdraw(amount){
      this.account.submitTransaction(this.dateNow(), - amount)
  }


}

module.exports = Transaction;