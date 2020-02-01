class Application {
  /**
   * @param {Object} basket
   * @param {Object} discounts
   * @returns {!number}
   */

  static checkBasketIfInUse(basket) {
    let priceVal = 0;
    if (Object.keys(basket).length > 1) {
      for(let i in basket) {
        priceVal += basket[i].price * basket[i].quantity;
      }
    } else if (Object.keys(basket).length === 1) {
      priceVal = basket[Object.keys(basket)[0]].price;
    }
    return priceVal;
  }

  static basketQuantity(basket) {
    return Object.keys(basket).length;
  }

  static getPercentDiscount(price, discounts, basketquantity) {
    let discountAmount = 0;
    let itemPrice = price;
    const discountkeysarray = Object.keys(discounts);
    const discountminimum = discounts[discountkeysarray[0]].min;
  
    if (discountkeysarray.length > 0 && basketquantity >= discountminimum) {
      itemPrice *= (discounts[discountkeysarray[0]].value / 100);
      discountAmount = itemPrice;
    }
    return discountAmount;
  }

  // static discountsAvailable(discounts) {

  // }
  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    const price = this.checkBasketIfInUse(basket);
    const basketquantity = this.basketQuantity(basket);
    let discountAmount = 0;
    if (Object.keys(discounts).length > 0) {
      discountAmount = this.getPercentDiscount(price, discounts, basketquantity);
    }
    const total = price - discountAmount;

    return total;
    throw new Error('You must implement this.');
  }
}

module.exports = Application;
