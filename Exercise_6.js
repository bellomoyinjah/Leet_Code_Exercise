// Exercise 6
// 1201. Ugly Number III
let nthUglyNumber = function (n, a, b, c) {
  let newArray = [];
  for (i = 1; i < 10e7; i++) {
    if (i % a === 0 || i % b === 0 || i % c === 0) {
      newArray.push(i);
    }
  }
  return newArray[n - 1];
};
console.log(nthUglyNumber(20, 2, 3, 5));
