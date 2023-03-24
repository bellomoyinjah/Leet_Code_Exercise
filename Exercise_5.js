// Exercise 5
// 2288. Apply Discount to Prices

var discountPrices = function (sentence, discount) {
  let newPrices = ["$" + "...digits"];
  let prices = ["$" + "...digits"];
  let prices1 = parseInt(prices["...digits"]);
  let newPrices1 = parseInt(newPrices["...digits"]);
  for (i = 0; i < sentence.length; i++) {
    if ((sentence[i] = "$")) {
      newPrices1 = prices1 * discount;
    }
    return newPrices1;
  }
};
console.log(discountPrices("the prices are $5 $6 and $7", 0.5));
