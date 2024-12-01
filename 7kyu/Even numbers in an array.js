function evenNumbers(array, number) {
    let numberMassive = [];
    for (let i = 0;i < array.length; i++){
      if (array[i] % 2 === 0){
        numberMassive.push(array[i])
      }
    }
    return numberMassive.slice(-number)
  }