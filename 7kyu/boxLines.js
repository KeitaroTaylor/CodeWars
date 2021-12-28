// https://www.codewars.com/kata/6129095b201d6b000e5a33f0/train/javascript

// Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)

// Notes
// Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
// X,Y and Z are strictly positive, and can go as large as 2^16 - 1
// This is my first kata, so I hope every one will enjoy it <3



function f(x,y,z){
  let xAm = 3*x + 1
  let yAm = (y-1)*(2*x + 1)
  let zAm = z*((5*x + 3) + (y-1)*(3*x + 2))

  console.log(xAm, yAm, zAm)
  return xAm + yAm + zAm
}