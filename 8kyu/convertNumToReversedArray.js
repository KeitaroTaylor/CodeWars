// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]



function digitize(n) {
  n = n.toString().split('')
  let newArray = []
  for (let i=0; i<n.length; i++) {
    newArray.unshift(parseInt(n[i]))
  }
  return newArray
}