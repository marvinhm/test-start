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

  static sizeOfBasket(basket) {
    let size = 0;
    if (Object.keys(basket).length > 0) {
      size = Object.keys(basket).length;
    }
    return size;
  }

  static checkBasketIfInUse(basket) {
    let priceVal = 0;
    if (this.sizeOfBasket(basket) > 1) {
      // eslint-disable-next-line guard-for-in
      for (let i in basket) {
        priceVal += (basket[i].price * basket[i].quantity);
      }
    } else if (this.sizeOfBasket(basket) === 1) {
      priceVal = basket[this.getBasketId(basket)].price;
    }
    return priceVal;
  }

  static getPercentDiscount(price, discounts, discountid) {
    let discountamount = 0;
    const itemPrice = price;
    const discountvalue = discounts[discountid].value;
    discountamount = itemPrice * (discountvalue / 100);

    return discountamount;
  }


  static getAbsoluteDiscount(discounts, discountid) {
    const discountamount = discounts[discountid].value;

    return discountamount;
  }

  static getBuyNGetMFree(n, m, price, basketquantity) {
    let counter = 1;
    let pricetobepaid = 0;

    for (let i = 1; i <= basketquantity; i++) {
      if (counter <= n) {
        pricetobepaid += price;
        counter += 1;
      } else {
        counter = 1;
      }
    }
    return pricetobepaid;
  }

  static nForThePriceOfM(n, m, price, basketquantity) {
    let totalprice = 0;
    let ncount = 1;
    let mcount = 1;

    for (let i = 0; i <= basketquantity; i++) {
      if (ncount <= n) {
        ncount += 1;
        if (mcount <= m) {
          totalprice += price;
          mcount += 1;
        }
      } else {
        ncount = 1;
        mcount = 1;
      }
    }

    return totalprice;
  }

  static applyDiscount(discountsArray, price, discounts, basketquantity) {
    let discountamount = 0;
    let discountedprice = price;
    let discountid = '';
  
    // eslint-disable-next-line guard-for-in
    for (let i in discountsArray) {
      discountid = discountsArray[i];
      const discounttype = discounts[discountsArray[i]].type;
      const discountminimum = discounts[discountid].min;
      const discountm = discounts[discountid].m;
      const discountn = discounts[discountid].n;

      if (discounttype === 'percent' && basketquantity >= discountminimum) {
        discountamount = this.getPercentDiscount(discountedprice, discounts, discountid);
        discountedprice -= discountamount;
      } else if (discounttype === 'absolute' && basketquantity >= discountminimum) {
        discountamount = this.getAbsoluteDiscount(discounts, discountid);
        discountedprice -= discountamount;
      } else if (discounttype === 'buyNGetMFree' && basketquantity >= discountminimum) {
        discountedprice = this.getBuyNGetMFree(discountn, discountm, price, basketquantity);
      } else if (discounttype === 'nForThePriceOfM' && basketquantity >= discountminimum) {
        discountedprice = this.nForThePriceOfM(discountn, discountm, price, basketquantity);
      } else {
        discountedprice *= basketquantity;
      }
    }
    return discountedprice;
  }


  static main(basket, discounts) { // eslint-disable-line no-unused-vars
    const price = this.checkBasketIfInUse(basket);
    const size = this.sizeOfBasket(basket);
    let basketquantity = 0;
    size > 0 ? basketquantity = basket[this.getBasketId(basket)].quantity : basketquantity = 0;
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
