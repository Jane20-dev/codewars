function alienLanguage(str){
    var wordsFirst = str.toUpperCase()
    var words = wordsFirst.split(" ")
    for (var i = 0; i < words.length; i++){
      if (words[i].length > 0){
        var lastChar = words[i][words[i].length - 1]
        words[i] = words[i].slice(0, -1) + lastChar.toLowerCase();
      }
    }
    return words.join(" ")
  }