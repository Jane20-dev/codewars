const solution = () => {
    var express = require('express');
    var app = express()
    
    const PORT = process.env.PORT || 3000;
    const HOST = process.env.HOST || '0.0.0.0';
    
    app.listen(PORT, HOST, () =>{
      console.log('Server is running')
    })
    
    
  };
  solution()