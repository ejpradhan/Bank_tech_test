const Account = require('../src/account')

describe('Account', () => {

    it('has a balance of 0', () => {
      const account = new Account;
      expect(account.balance).toEqual(0);
    });

    it('creates and stores a transaction in an array', () => {
        const account = new Account;
        account.submitTransaction("15/01/2023",100)

        expect(account.transactions).toEqual([ { date: '15/01/2023', amount: 100, balance: 100 } ])
    });
});