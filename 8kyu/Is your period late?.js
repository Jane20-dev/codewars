function periodIsLate(last, today, cycleLength) {
    const oneDay = 24 * 60 * 60 * 1000; 
   const diffDays = Math.floor((today - last) / oneDay); 
   return diffDays > cycleLength;
 
   
 }