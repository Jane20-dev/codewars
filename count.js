function strCount(str, letter){  
  let count = 0
  for (let index = 0; index < str.length; index++) {
    const symbol = str[index];
    if (symbol.toUpperCase() === letter.toUpperCase()) {
        count = count + 1
    }
  }
    return count
}
console.log(strCount("Евгения", "е"))

// const arr = [1, 2, 3]
// const str = 'Something'

// console.log(str[0])
// console.log(arr[0]);