function stray(numbers) {
    if(numbers[0] !== numbers[1]){
      if (numbers[0] === numbers[2]){
        return numbers[1]
      }else{
        return numbers[0]
      }
    }
    
    for (let i = 2; i < numbers.length;i++){
      if(numbers[i] !== numbers[0]){
        return numbers[i]
      }
    }
  }