function weatherInfo (temp) {
    const c = convertToCelsius(temp);
       if (c > 0){
         return (c + " is above freezing temperature");
       } else {
         return (c + " is freezing temperature");
       }
          
   }
   function convertToCelsius( temperature) {
       const celsius = (temperature - 32.0) * (5/9.0);
       return celsius;
   }