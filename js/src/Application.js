class Application {
  /**
   * @param {Object} basket
   * @param {Object} discounts
   * @returns {!number}
   */
  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    if (Object.keys(basket).length === 0) {
      return 0;
    }
    throw new Error('You must implement this.');
  }
}

module.exports = Application;
