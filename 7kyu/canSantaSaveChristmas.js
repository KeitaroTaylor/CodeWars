// https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript

// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .



function determineTime (durations) {
  let hours = 0
  let minutes = 0
  let seconds = 0
  let newArray = []
  for (i=0; i<durations.length; i++) {
    newArray = durations[i].split(':')
    hours += parseInt(newArray[0])
    minutes += parseInt(newArray[1])
    if (minutes >= 60) {
      minutes -= 60
      hours += 1
    }
    seconds += parseInt(newArray[2])
    if (seconds >= 60) {
      seconds -= 60
      minutes += 1
    }
    console.log(hours, minutes, seconds)
  }
  if (hours >= 24 && (minutes > 0 || seconds > 0)) {
    return false
  } else {
    return true
  }
}