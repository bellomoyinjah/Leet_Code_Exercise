// Exercise 4
//1871. Jump Game VII
var canReach = function (s, minJump, maxJump) {
  //   let minJump = 2;
  //   let maxJump = 3;
  s[0] = "0";
  for (i = 0; i + maxJump <= s.length - 1; i + minJump <= j) {
    if (s[j] == "0") {
      s[j] - s[i] == maxJump;
    }
    if (minJump > maxJump) {
      minJump = maxJump;
    }
  }
};
console.log(canReach(["011010"]));


