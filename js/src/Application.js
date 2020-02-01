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

  static getPercentDiscount(price, discounts) {
    let discountAmount = 0;
    let itemPrice = price;
    if (Object.keys(discounts).length > 0) {
      itemPrice *= (discounts[Object.keys(discounts)[0]].value / 100);
      discountAmount = itemPrice;
    }
    return discountAmount;
  }

  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    const price = this.checkBasketIfInUse(basket);
    const discountAmount = this.getPercentDiscount(price, discounts);
    const total = price - discountAmount;

    return total;
    throw new Error('You must implement this.');
  }
}

module.exports = Application;
