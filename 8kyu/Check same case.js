function sameCase(char1, char2) {
    const alphabets = /^[A-Za-z]+$/;
    function hasLowerCase(str) {
      return str.toUpperCase() != str;
    }
    function hasUpperCase(str) {
      return str.toLowerCase() != str;
    }
    if (!char1.match(alphabets) || !char2.match(alphabets)) {
        return -1;
      }
    if (hasLowerCase(char1) && hasLowerCase(char2)){
      return 1
    }
    if (hasUpperCase(char1) && hasUpperCase(char2)){
      return 1
    }
    return 0
  
  }
