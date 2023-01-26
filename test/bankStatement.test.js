const BankStatement = require("../src/bankStatement");

describe('Account', () => {

    it('returns the statement layout', () => {
        const dummyAccount = {
            transactions: []
          }
        const statement = new BankStatement(dummyAccount);
        expect(statement.printStatement()).toBe('date || credit || debit || balance');
    });

    it('returns a statement layout with the transaction included', () => {
        const dummyAccount = {
          transactions: [{date: '16/01/2023', amount: 30, balance: 30}]
        }
        const statement = new BankStatement(dummyAccount);
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n16/01/2023 || 30.00 || 30.00');
      });
    
    it('returns multiple transaction lines', () => {
        const dummyAccount = {
          transactions: [
            {date: '16/01/2023', amount: 30, balance: 30},
            {date: '17/01/2023', amount: 30, balance: 60},
            {date: '18/01/2023', amount: 30, balance: 90},
          ]
        }
        const statement = new BankStatement(dummyAccount);
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n18/01/2023 || 30.00 || 90.00\n17/01/2023 || 30.00 || 60.00\n16/01/2023 || 30.00 || 30.00');
    });

});