function cutIt(arr){
    let minLength = arr[0].length;
     
     for(let i = 1; i < arr.length; i++){
       if (arr[i].length < minLength){
         minLength = arr[i].length;
       }
     }
     let result = []
     for (let i = 0; i < arr.length; i++){
       result.push(arr[i].slice(0, minLength))
     }
     
     return result
     
     
   }