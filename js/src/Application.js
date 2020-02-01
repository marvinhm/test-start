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

  // static discountType(discounts) {
  //   if() {

  //   }
  // }

  static checkBasketIfInUse(basket) {
    let priceVal = 0;
    if (this.basketQuantity(basket) > 1) {
      // eslint-disable-next-line guard-for-in
      for (let i in basket) {
        priceVal += basket[i].price * basket[i].quantity;
      }
    } else if (this.basketQuantity(basket) === 1) {
      priceVal = basket[this.getBasketId(basket)].price;
    }
    return priceVal;
  }

  static getPercentDiscount(price, discounts, discountid, basketquantity) {
    let discountamount = 0;
    const itemPrice = price;
    // const discountkeysarray = this.getDiscountIdArray(discounts);
    // const discountminimum = discounts[discountid].min;
    // if (basketquantity >= discountminimum) {
      // itemPrice -= itemPrice * (discounts[discountid].value / 100);
      discountamount = itemPrice * (discounts[discountid].value / 100);
    // }
    return discountamount;
  }


  // static getPercentDiscount(price, basketquantity) {
  //   let discountamount = 0;
  //   let itemPrice = price;
  // }


  static applyDiscount(discountsArray, price, discounts, basketquantity) {
    let discountamount = 0;
    let discountedprice = price;
    let discountid = '';
  
    // eslint-disable-next-line guard-for-in
    for (let i in discountsArray) {
      discountid = discountsArray[i];
      const discounttype = discounts[discountsArray[i]].type;
      const discountminimum = discounts[discountid].min;
      if (discounttype === 'percent' && basketquantity >= discountminimum) {
        discountamount = this.getPercentDiscount(discountedprice, discounts, discountid);
        discountedprice -= discountamount;
      }
    }
    return discountedprice;
  }

  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    const price = this.checkBasketIfInUse(basket);
    console.log(price);
    const basketquantity = this.basketQuantity(basket);
    let total = 0;
    let discountamount = 0;
    const discountsArray = this.getDiscountIdArray(discounts);
    if (discountsArray.length > 0) {
      discountamount = this.applyDiscount(discountsArray, price, discounts, basketquantity);
      total = discountamount;
    } else {
      total = price;
    }

    return total;
    throw new Error('You must implement this.');
  }
}

module.exports = Application;
