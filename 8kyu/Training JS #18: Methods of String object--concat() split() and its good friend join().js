function splitAndMerge(string, separator) {
    var words = string.split(" ")
    var wordsTwo = words.map(word => word.split("").join(separator))
     return wordsTwo.join(" ")
    }