// Exercise 2
// 2332. The Latest Time to Catch a Bus
// check capacity first, if
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
  for (let i = 0; i < buses.length; i++) {
    for (let j = 0; j < passengers.length; j++) {
      if (capacity > 0 && buses(i) > passengers(j)) {
        capacity - 1;
        passengers.splice(j, 1);
      }
    }
    return j;
  }
};
console.log(latestTimeCatchTheBus([10, 20], [2, 17, 18, 19], 2));
