function smallEnough(a, limit){
    let rightNumber = 0;
      for (let i = 0; i < a.length; i++){
        if(a[i] < limit){
          rightNumber += 1
      }else if(a[i] === limit){
          rightNumber += 1
      }
    }
    return rightNumber === a.length
  }