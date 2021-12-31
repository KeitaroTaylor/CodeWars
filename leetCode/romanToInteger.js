// https://leetcode.com/problems/roman-to-integer/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



var romanToInt = function(s) {
    s = s.toString().split('')
    let newArray = 0
    for (i=0; i<s.length; i++) {
        if (s[i] === 'I') {
            if (s[i+1] === 'V') {
                newArray += 4
                i++
            } else if (s[i+1] === 'X') {
                newArray += 9
                i++
            } else {
                newArray += 1
            }
        } else if (s[i] === 'V') {
            newArray += 5
        } else if (s[i] === 'X') {
            if (s[i+1] === 'L') {
                newArray += 40
                i++
            } else if (s[i+1] === 'C') {
                newArray += 90
                i++
            } else {
                newArray += 10
            }
        } else if(s[i] === 'L') {
          newArray += 50  
        } else if (s[i] === 'C') {
            if (s[i+1] === 'D') {
                newArray += 400
                i++
            } else if (s[i+1] === 'M') {
                newArray += 900
                i++
            } else {
                newArray += 100
            }
        } else if (s[i] === 'D') {
            newArray += 500
        } else if (s[i] === 'M') {
            newArray += 1000
        }
        
    }
    return parseInt(newArray)
};

/*
first idea is to check upon each iteration if, depending on the character, the following characters are certain characters that make the current number a different number (for example, if array[i] === I, we'd check if array[i+1] === V or X). a lot of if statements

then, if it is in fact a two-character number, then we'd increase i to i+1 before the loop iterates further
*/