function strCount(str, letter){  
  let count = 0
  for (let index = 0; index < str.length; index++) {
    const symbol = str[index];
    if (symbol === letter) {
        count = count + 1
    }
  }
    return count
}