// https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'



function paul(x){
  let sum = 0
  
  for (i=0; i<x.length; i++) {
    if (x[i] == 'kata') {
      sum += 5
    } else if (x[i] == 'Petes kata') {
      sum += 10
    } else if (x[i] == 'life') {
      sum += 0
    } else if (x[i] == 'eating') {
      sum += 1
    }
  }
  
  if (sum<40) {
    return 'Super happy!'
  } else if (sum<70) {
    return 'Happy!'
  } else if (sum<100) {
    return 'Sad!'
  } else {
    return 'Miserable!'
  }
}