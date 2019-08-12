/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === 'quarter') {
      this.cashTendered += 25;
    } else if (typeOfCoin === 'dime') {
      this.cashTendered += 10;
    } else if (typeOfCoin === 'nickel') {
      this.cashTendered += 5;
    } else if (typeOfCoin === 'penny') {
      this.cashTendered += 1;
    }

  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
      return this.amountDue <= this.cashTendered;
  }

  giveChange() {
    // TODO return the correct change in the following format...
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    let change = this.cashTendered - this.amountDue;
    while (change > 0) {
      if (change - 25 >= 0) {
        quarters++;
        change -= 25;
        continue
      } else if (change - 10 >= 0) {
        dimes++;
        change -= 10;
        continue
      } else if (change - 5 >= 0) {
        nickels++;
        change -= 5;
        continue
      } else if (change - 1 >= 0) {
        pennies++;
        change -= 1;
        continue
      } else {
        break;
      }
    }


    return {
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies
    };
  }
}

module.exports = { ChangeHandler };
