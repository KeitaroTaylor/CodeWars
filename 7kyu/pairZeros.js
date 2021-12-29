// https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/train/javascript

// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

// Examples
// input: [0, 1, 0, 2]
// paired: ^-----^
//     -> [0, 1,   2]
//   kept: ^

// input: [0, 1, 0, 0]
// paired: ^-----^
//     -> [0, 1,    0]
//   kept: ^        ^

// input: [1, 0, 7, 0, 1]
// paired:    ^-----^
//     -> [1, 0, 7,    1]
//   kept:    ^

// input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
// paired: ^--------^        ^--^
//     -> [0, 1, 7,    2, 2, 0,    1, 0]
//   kept: ^                 ^        ^
// Notes
// Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
// 0s generated by pairing can NOT be paired again
// ( void where not applicable: ) Don't modify the input array or you may fail to pass the tests



function pairZeros(arr) {
  let newArr = arr
  let count = 0
  for (i=0; i<newArr.length; i++) {
    if (newArr[i] === 0) {
      count++
      if (count % 2 === 0) {
        newArr.splice(i, 1)
        i--
      }
    }
  }
  return newArr
}