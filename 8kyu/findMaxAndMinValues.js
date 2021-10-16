// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0



var min = function(list){
    let newLow = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i] < newLow) {
        newLow = list[i]
      }
    }
    return newLow;
}

var max = function(list){
    let newHigh = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i] > newHigh) {
        newHigh = list[i]
      }
    }
    return newHigh;
}