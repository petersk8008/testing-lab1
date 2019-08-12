let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {

    // Set up a test below...
    test("The ChangeHandler class is defined.", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(ChangeHandler).toBeDefined();
    });

    test("Amount due is set for an argument.", function() {
        // Remember, you can arrange, act, and assert...start small
        let vendingMachine = new ChangeHandler(250);
        expect(vendingMachine.amountDue).toBe(250);
    });

    test("cashTendered is set to zero.", function() {

        let vendingMachine = new ChangeHandler(0);
        expect(vendingMachine.cashTendered).toBe(0);
    });

    //Set up tests for insertCoin method
    test("Inserting a quarter changes cashTendered add 25 cents", function() {

        let vendingMachine = new ChangeHandler(250);
        vendingMachine.insertCoin('quarter');
        expect(vendingMachine.cashTendered).toBe(25);
    });

    test("Inserting a dime changes cashTendered add 10 cents", function() {
        let vendingMachine = new ChangeHandler(250);
        vendingMachine.insertCoin('dime');
        expect(vendingMachine.cashTendered).toBe(10);
    });

    test("Inserting a nickel changes cashTendered add 5 cents", function() {
        let vendingMachine = new ChangeHandler(250);
        vendingMachine.insertCoin('nickel');
        expect(vendingMachine.cashTendered).toBe(5);
    });

    test("Inserting a penny changes cashTendered add 1 cent", function() {
        let vendingMachine = new ChangeHandler(250);
        vendingMachine.insertCoin('penny');
        expect(vendingMachine.cashTendered).toBe(1);
    });

    test("Calling function multiple times adds each item to cashTendered", function() {
        let vendingMachine = new ChangeHandler(250);
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('dime');
        vendingMachine.insertCoin('penny');
        expect(vendingMachine.cashTendered).toBe(61);
    });

    //Tests for isPaymentSufficient()

    test("isPaymentSufficient returns true if amount Tendered is more than amount due", function() {
        let vendingMachine = new ChangeHandler(51);
        vendingMachine.cashTendered = 60;
        expect(vendingMachine.isPaymentSufficient()).toBe(true);

    });

    test("isPaymentSufficient returns false if amount Tendered is less than amount due", function() {
        let vendingMachine = new ChangeHandler(51);
        vendingMachine.cashTendered = 50;
        expect(vendingMachine.isPaymentSufficient()).toBe(false);

    });

    test("isPaymentSufficient returns true if amount Tendered is equal to the amount due", function() {
        let vendingMachine = new ChangeHandler(51);
        vendingMachine.cashTendered = 51;
        expect(vendingMachine.isPaymentSufficient()).toBe(true);

    });

    //Tests for giveChange() function
    test("32 changes gives: 1 quarter, 1 nickel, 2 pennies", function() {
        let vendingMachine = new ChangeHandler(50);
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('nickel');
        vendingMachine.insertCoin('penny');
        vendingMachine.insertCoin('penny');
        expect(vendingMachine.giveChange()).toStrictEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
    });

    test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
        let vendingMachine = new ChangeHandler(50);
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('dime');
        expect(vendingMachine.giveChange()).toStrictEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0})
    });

    test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
        let vendingMachine = new ChangeHandler(50);
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('penny');
        vendingMachine.insertCoin('penny');
        expect(vendingMachine.giveChange()).toStrictEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2})
    });

    test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
        let vendingMachine = new ChangeHandler(50);
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('quarter');
        vendingMachine.insertCoin('dime');
        vendingMachine.insertCoin('nickel');
        vendingMachine.insertCoin('penny');
        vendingMachine.insertCoin('penny');
        vendingMachine.insertCoin('penny');
        expect(vendingMachine.giveChange()).toStrictEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3})
    });

});
