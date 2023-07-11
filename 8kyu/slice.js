function arrAy (num){
    let stringFromNum = num.toString()
    for (let index = 0; index < stringFromNum.length; index++) {
       const lastIndex = stringFromNum.length - 1 
       const lastChar = stringFromNum[lastIndex]

       if (lastChar === '0') {
        stringFromNum = stringFromNum.slice(0, lastIndex)      
       }
    }
    return Number(stringFromNum)

}
console.log(arrAy(num))