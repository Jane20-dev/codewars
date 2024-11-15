function parse( data ){
    let value = 0;
    
    let massive = [];
    
    for (let command of data){
      
    if (command === 'i'){
      value += 1
    }else if (command === 'd'){
      
      value -= 1
    }else if(command === 's'){
      
      value = value **2
    }else if(command === 'o'){
      massive.push(value)
    }
      
    }
    
    return massive; 
  }