/* eslint-disable no-restricted-syntax */
class Application {
  /**
   * @param {Object} basket
   * @param {Object} discounts
   * @returns {!number}
   */

  static getDiscountIdArray(discounts) {
    const discountkeysarray = Object.keys(discounts);
    return discountkeysarray;
  }

  static getBasketId(basket) {
    const basketid = Object.keys(basket)[0];
    return basketid;
  }

  static basketQuantity(basket) {
    return Object.keys(basket).length;
  }

  static checkBasketIfInUse(basket) {
    let priceVal = 0;
    if (Object.keys(basket).length > 1) {
      // eslint-disable-next-line guard-for-in
      for (let i in basket) {
        priceVal += basket[i].price * basket[i].quantity;
      }
    } else if (Object.keys(basket).length === 1) {
      priceVal = basket[this.getBasketId(basket)].price;
    }
    return priceVal;
  }

  static getPercentDiscount(price, discounts, basketquantity) {
    let discountamount = 0;
    let itemPrice = price;
    const discountkeysarray = this.getDiscountIdArray(discounts);
    const discountminimum = discounts[discountkeysarray[0]].min;
    if (discountkeysarray.length > 0 && basketquantity >= discountminimum) {
      for (let i in discountkeysarray) {
        itemPrice -= itemPrice * (discounts[discountkeysarray[i]].value / 100);
      }
      discountamount = price - itemPrice;
    }
    return discountamount;
  }

  // static discountsAvailable(discounts) {

  // }
  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    const price = this.checkBasketIfInUse(basket);
    const basketquantity = this.basketQuantity(basket);
    let discountamount = 0;
    if (this.getDiscountIdArray(discounts).length > 0) {
      discountamount = this.getPercentDiscount(price, discounts, basketquantity);
    }
    const total = price - discountamount;

    return total;
    throw new Error('You must implement this.');
  }
}

module.exports = Application;
