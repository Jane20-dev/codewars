var isSquare = function(n){
  
  
    if (n < 0){
      return false
    }else if (n === 0){
      return true
    }
     
     const squre = Math.sqrt(n)
     return Number.isInteger(squre)
   }