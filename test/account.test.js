const Account = require('../src/account')

describe('Account', () => {

    it('has a starting balance of 0', () => {
      const account = new Account;
      expect(account.balance).toEqual(0);
    });

    it('creates and stores a transaction in an array', () => {
        const account = new Account;
        account.submitTransaction("15/01/2023",100)

        expect(account.transactions).toEqual([ { date: '15/01/2023', amount: 100, balance: 100 } ])
    });

    it('stores the correct balance of the transactions made', () => {
        const account = new Account;
        account.submitTransaction("15/01/2023",100)
        account.submitTransaction("16/01/2023",50)
        expect(account.balance).toEqual(150)
    });

    it('stores an array of multiple transactions', () => {
        const account = new Account;
        account.submitTransaction("15/01/2023",100)
        account.submitTransaction("16/01/2023",50)
        
        expect(account.transactions).toEqual([
            { date: '15/01/2023', amount: 100, balance: 100 },
            { date: '16/01/2023', amount: 50, balance: 150 }
          ])
    })
    









});