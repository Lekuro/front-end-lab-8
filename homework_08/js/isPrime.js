function isPrime(n) {
  if (n > 1 && Number.isInteger(n)) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
