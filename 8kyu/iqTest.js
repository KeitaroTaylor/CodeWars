// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)



function iqTest(numbers) {
  let numArr = numbers.split(' ')
  let obj = {}
  obj.evenCount = 0
  obj.oddCount = 0

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      obj.evenCount += 1
      obj.even = i + 1
    } else {
      obj.oddCount += 1
      obj.odd = i + 1
    }
  }

  if (obj.evenCount < obj.oddCount) {
    return (obj.even)
  } else {
    return (obj.odd)
  }
}