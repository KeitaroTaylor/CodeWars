// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"



function spinWords(string){
  let newArray = string.split(' ')
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].length >= 5) {
      newArray[i] = newArray[i].split('')
      newArray[i] = newArray[i].reverse()
      newArray[i] = newArray[i].join('')
    }
  }
  return newArray.join(' ')
}



/*
params
  string of one of more words
  separated by spaces
return
  same string but words w 5 or more letters are reversed
example
  "hey fellow warriors" => 'hey wollef sroirraw'
psuedocode
  split string by spaces
  loop through each word
  if string is 5 letters or more
  reverse string
  join string back together
*/