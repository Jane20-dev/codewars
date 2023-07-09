function betterThanAverage(classPoints, yourPoints) {
    const good = classPoints.reduce((sum, points) => sum + points, 0)
    const best = good / classPoints.length;
    
    return yourPoints > best;
  
  }