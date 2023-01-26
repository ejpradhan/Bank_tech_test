class BankStatement {
  constructor(account) {
      this.account = account;
      
  }

  statementLayout(transactions){
      let statementScript = []

      transactions.forEach((transaction) => {
         
             statementScript.unshift(`${transaction.date} || ${transaction.amount}.00 || ${transaction.balance}.00`)      
      })
      return statementScript;
      
  }

  printStatement() {
      let statementScript = this.statementLayout(this.account.transactions);

      statementScript.unshift(['date || credit || debit || balance', ])


      const statement = statementScript.join('\n');

      return statement;

  }
}

module.exports = BankStatement;