function firstToLast(str,c){
    const firstIndex = str.indexOf(c)
    const lastIndex = str.lastIndexOf(c)
    
    let theDifference = lastIndex - firstIndex;
    
    if (lastIndex === -1 && firstIndex >= 0 ){
      return 0
    } else if(firstIndex === -1 && lastIndex == -1){
      return -1
    } else{
      return theDifference
    }
    
  }