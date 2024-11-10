function sumOfMinimums(arr) {
    let sum = 0;
    for (let row of arr){
      let min = Math.min(...row)
        sum += min
    }
    return sum
  }