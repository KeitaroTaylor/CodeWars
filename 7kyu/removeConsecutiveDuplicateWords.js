// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



function removeConsecutiveDuplicates(s) {
  s = s.split(' ')
  let newArray = []
  for (let i=1; i<=s.length; i++) {
    if (s[i-1] !== s[i]) {
      newArray.push(s[i-1])
    }
  }
  return newArray.join(' ')
}