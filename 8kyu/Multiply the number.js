function multiply(number){
    const numString = Math.abs(number).toString();
     const count = numString.length;
     const myltiplier = Math.pow(5, count);
     return number * myltiplier
   }