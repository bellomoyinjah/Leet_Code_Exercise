// Exercise 3
// 166. Fraction to Recurring Decimal

// var fractionToDecimal = function (numerator, denominator) {
//   let fraction = numerator / denominator;
//   var digits = [];
//   let res = numerator % denominator;
//   if (res !== 0) {
//     numerator *= 10;
//     let digit = numerator / denominator,
//       count = 1;
//     numerator -= digit * denominator;
//     count++;
//     digits.push(digit);
//     return digit;
//   }
//   let answer = fraction.toString();
//   return res;
//   return answer;
// };
// console.log(fractionToDecimal(7, 5));
var fractionToDecimal = function (numerator, denominator) {
    let fraction = numerator / denominator;
    //   let answer = fraction.toString();
    //   return answer;
    if (fraction % 1 !== 0) {
      var m = (fraction + "").match(/\.(\d*?)(\d+?)\2+$/);
      let answ = m && { pattern: +m[2], index: m[1].length };
      // return fraction;
      return answ.pattern;
    }
  };
  console.log(fractionToDecimal(1, 3));
  // console.log(`(${getRepetend(3.333333333333333)})`)