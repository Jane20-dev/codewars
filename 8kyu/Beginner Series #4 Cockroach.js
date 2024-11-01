function cockroachSpeed(s) {
    const speedKmh = s * (100000/3600)
    return Math.floor(speedKmh)
  }