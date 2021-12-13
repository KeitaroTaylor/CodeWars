// https://leetcode.com/problems/longest-palindromic-substring/submissions/

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.



var longestPalindrome = function(s) {
    let count = 0
    let s2 = []
    let s3 = []
    let ss = []
    s = s.split('')
    for (h=0; h<s.length; h++) {
        for (i=h; i<s.length; i++) {
            s2.push(s[i])
            s3.push(s[i])
            s2 = s2.reverse()
            // console.log(s2, s3)
            if (s2.join('') == s3.join('')) {
                ss[count] = s2.join('')
                count++
                // console.log(ss)
            }
            s2.reverse()
        }
        s2 = []
        s3 = []
    }
    ss = [...new Set(ss)]
    ss.sort()
    ss.sort((a, b) => b.length - a.length)
    console.log(ss)
    return ss[0]
};