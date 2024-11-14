function flickSwitch(arr){
    let values = true
    let massive = []
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === 'flick'){
        values = !values 
      }
      massive.push(values)
    }
    return massive;
  }