const Transaction = require('../src/transaction')


describe('Transaction', () => {

      it('has a fearue to allow to "deposit money"', () => {
            const dummyAccount = {
            balance: 300,
            submitTransaction: (date, amount) => {}
            }
            const transaction = new Transaction(dummyAccount);
            transaction.deposit(300);
            expect(dummyAccount.balance).toBe(300);
      });

      it('has a feature to allow to "withdraw money"', () => {
        const dummyAccount = {
        balance: -50,
        submitTransaction: (date, amount) => {}
        }
        const transaction = new Transaction(dummyAccount);
        transaction.deposit(-50);
        expect(dummyAccount.balance).toBe(-50);
  });













}); 