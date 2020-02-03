
## Scenario

a shopping basket that accepts a basket of items and some discounts, applies the discounts to the items in the basket, and returns a total price.

(Both the basket (i.e. the collection of items) and the collection of discounts are keyed by uuid4.)

A basket is a collection of items, and an item has three properties:

* `price` a float
* `quantity` the number of items to buy
* `discounts` a collection of discounts to be applied to the item (in the order given)

There are four discount types which need to be implemented:

### Percentage

A percentage discount has properties:

* `type` which is `percentage`
* `value` the percentage to knock off the price
* `min` the minimum quantity of items in order to qualify for the discount

### Absolute

An absolute discount has properties:

* `type` which is `absolute`
* `value` the absolute amount to knock off the price
* `min` the minimum quantity of items in order to qualify for the discount

### Buy N get M free

A buy-n-get-m-free discount has properties:

* `type` which is `buyNGetMFree`
* `n` an integer, the quantity of items which need to be paid for
* `m` an integer, the quantity of items which don't need to be paid for
* `min` the minimum quantity of items in order to qualify for the discount - effectively `n + m`

### N for the price of M

A n-for-the-price-of-m discount has properties:

* `type` which is `nForThePriceOfM`
* `n` an integer, the quantity of items
* `m` an integer, the quantity of items which need to be paid for
* `min` the minimum quantity of items in order to qualify for the discount - effectively `n`

## Running the tests

You'll need [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) installed.

### PHP

```docker-compose up php```

### JavaScript

```docker-compose up js```
