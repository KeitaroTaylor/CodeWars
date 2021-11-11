// https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9/train/javascript

// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.



function diffBig2(arr) {
  let newArr = []
  newArr.push(Math.max(...arr))
  arr.splice(arr.indexOf(Math.max(...arr)), 1)
  newArr.push(Math.max(...arr))
  return newArr[0] - newArr[1]
}

/*
Parameters 
  - array of non-negative numbers
  - at least 2 elements in array
Return
  - the difference of biggest # and 2nd biggest #
Example
  - [10, 5, 2] => 5 (10-5)
  - [8, 5, 11, 4] => 3 (11-8)
    8 5 11 4
    11
Psuedocode
  - cant do sort method
  - create new array
  - for loop to iterate through every element
  - push the max number of the array to new array
  - delete max number from original array
  - find difference of 0th and 1st elements in new array
  */