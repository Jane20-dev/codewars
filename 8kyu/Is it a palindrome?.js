function isPalindrome(x) {
    function reverseStr(str) {
        const arrayCharsFromString = str.split('')
        const reverseArray = arrayCharsFromString.reverse()
        const reverseString = reverseArray.join('')
        return reverseString
    }
    const str = x.toLowerCase()
    const reverse = reverseStr(str)
    const checkIsPalindrome = str === reverse;
    return checkIsPalindrome
  }