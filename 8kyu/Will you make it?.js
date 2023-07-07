const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const distance = mpg * fuelLeft // distance that can be driven on the remaining fuel
    if (distance >= distanceToPump ){
      return true // you can drive
    } else {
      return false // you can't drive
    }
  };