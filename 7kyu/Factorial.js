function factorial(n){
    if (n < 0){
      return undefiend 
    }
    if (n === 1 || n === 0){
      return 1
    }
    let result = 1
    for (let i = 2; i <= n; i++){
      result *= i
    }
    return result 
    
    
    //your code here
  }