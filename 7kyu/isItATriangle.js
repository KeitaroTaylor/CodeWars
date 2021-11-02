// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).



function isTriangle(a,b,c) { 
  let arr = [a, b, c]
  arr.sort()
  let aAbB = arr[0]*arr[0] + arr[1]*arr[1]
  console.log(arr, aAbB, arr[2]*arr[2])
    if (aAbB >= arr[2]*arr[2]) {
      return true;
    } else {
      return false
    }
}