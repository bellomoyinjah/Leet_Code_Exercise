// Exercise 1
// 1657. Determine if Two Strings Are Close

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let num1 = new Array(26).fill(0);
  let num2 = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    num1[word1[i].charCodeAt() - "a".charCodeAt()]++;
    num2[word2[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < num1.length; i++) {
    if ((num1[i] && !num2[i]) || (num2[i] && !num1[i])) return false;
  }
  num1.sort((a, b) => b - a);
  num2.sort((a, b) => b - a);
  let j = 0;
  while (j < num1.length) {
    if (num1[j] != num2[j]) return false;
    if (num1[j] <= 0 && num2[j] <= 0) break;
    j++;
  }
  return true;
};
