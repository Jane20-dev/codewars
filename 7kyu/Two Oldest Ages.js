// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let sorting = ages.sort((a,b) => b - a)
      return [sorting[1],sorting[0]]
      
    }