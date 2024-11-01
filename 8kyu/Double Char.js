function doubleChar(str) {
    let ops = ''
    for (let i = 0; i < str.length; i++){
      ops += str[i]+ str[i]
  }
    return ops
  }