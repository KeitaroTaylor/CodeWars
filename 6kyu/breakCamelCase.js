// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



// complete the function
function solution(string) {
  // putting a space before the capital letter
  // split the string into an array
  // map to find capital letter
  // add space before capital letter
  return string.split('').map(l => l === l.toUpperCase() ? ' ' + l : l).join('')
}
