// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



function fakeBin(x){
  let newArray = []
  x = x.split('')
  for (let i=0; i<x.length; i++) {
    if (x[i] < 5) {
      newArray.push(0)
    } else {
      newArray.push(1)
    }
  }
  return newArray.join('')
}