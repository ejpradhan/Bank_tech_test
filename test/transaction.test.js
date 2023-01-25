const Transaction = require('../src/transaction')


describe('Transaction', () => {

      it('has a "deposit money" feature', () => {
            const dummyAccount = {
            balance: 300,
            submitTransaction: (date, amount) => {}
            }
            const transaction = new Transaction(dummyAccount);
            transaction.deposit(300);
            expect(dummyAccount.balance).toBe(300);
      });
}); 