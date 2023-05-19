function trueOrFalse(val){
  
    if (val == false || val == undefined || val == 0 || val == "" || val == NaN) {
      return "false";
    }else{
      return "true";  
    }        
    
  }