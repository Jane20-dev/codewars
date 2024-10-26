function colorOf(r,g,b){
    var colorFirst = r.toString(16);
    var colorSecond = g.toString(16);
    var colorThird = b.toString(16);
    
    
     if (colorFirst.length < 2){
      colorFirst = '0' + colorFirst;
    }
    
    if (colorSecond.length < 2){
      colorSecond = '0' + colorSecond;
    }
    
    if(colorThird.length < 2){
      colorThird = '0' + colorThird;
    }
    return '#' + colorFirst + colorSecond + colorThird
    
  }
  