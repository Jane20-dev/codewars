function rowWeights(array){
    let firstCommand = 0;
    let secondCommand = 0;
    
    for(let i = 0; i < array.length; i++){
      if(i % 2 == 0){
        firstCommand += array[i]
      }else{
        secondCommand += array[i]
      }
      
    }
    return[firstCommand, secondCommand]
    //your code here
  }