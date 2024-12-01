function automorphic(n){
    const numberTwo = n*n;
     
    const thisNumber = n.toString();
    const squareNumber = numberTwo.toString();
    
    if(squareNumber.endsWith(thisNumber)){
      return "Automorphic"
    }else{
      return "Not!!"
    }
   //   return "Not!!" // your code here
   }