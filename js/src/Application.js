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

  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    return this.checkBasketIfInUse(basket);
    throw new Error('You must implement this.');
  }
}

module.exports = Application;
