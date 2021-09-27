// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"



function nameShuffler(str){
  let strings = str.split(' ')
  return strings[1] + ' ' + strings[0]
}