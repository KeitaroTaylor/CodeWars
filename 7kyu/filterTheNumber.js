// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

// Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.



var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}

var FilterString = function(value) {
  let newArr = []
  value = value.split('')
  for (i=0; i<value.length; i++) {
    parseInt(value[i]) == NaN ? console.log(NaN) : newArr.push(parseInt(value[i]))
  }
  return newArr.join('')
}