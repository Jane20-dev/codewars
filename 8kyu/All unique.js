function hasUniqueChars(str){
    let newSymbol = new Set()
    
    for (let char of str){
      if(newSymbol.has(char)){
        return false
      }
      newSymbol.add(char)
    }
    return true
  }