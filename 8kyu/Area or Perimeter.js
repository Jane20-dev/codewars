const areaOrPerimeter = function(l , w) { 
    const square = l * w;
    const rectangle = (2 * (l + w));   
    
      if (l === w) {
        return square
      } else {
        return rectangle
      }
  };