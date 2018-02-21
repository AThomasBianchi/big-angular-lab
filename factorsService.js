(function() {
  var factorNumber;
  function FactorService() {
    return {
      getPrimeFactors: getPrimeFactors,
      isPrime: isPrime,
      setNumber: setNumber,
      getFactors: getFactors
    };
  }

  // a function to check if a number is prime
  function isPrime(num) {
    for (var i=2; i<num; i++) {                       // for every integer between 1 and the number
      if (num % i === 0) {                            // if that number divided by an integer has a remainder
        return false;                                 // that number is not prime, stop looping and return false
      }
    }
    return true;                                      // if the number is divisible by none of the integers, it's prime
  }

  // a function that returns an array of the prime factors of a number
  function getPrimeFactors(bigNum) {
    var primeFactors = [];                            // an empty list to be filled with the prime numbers
    var i = 2;                                        // start with 2, the smallest prime number

    if (bigNum === 1 || bigNum === 0) {               // catch the numbers 0 and 1, which are smaller than the smalles prime number
      return [ "That number is too small to have a prime factor." ];
    }
    while (i <= bigNum) {
      if ( !(bigNum % i === 0) || !(isPrime(i)) ) {   // if the number is either not a factor or not prime, skip it
        i++;                                          // and increment to the next number
      } else {
        primeFactors.push(i);                         // if the number is both a factor and prime, add it the the prime factor list
        bigNum = bigNum / i;                          // reset the number to the remainder
        i = 2;                                        // reset the potential factor to the smallest prime
      }
    }
    return primeFactors;
  }

  function setNumber(inputNumber) {
    factorNumber = inputNumber;
  }

  function getFactors() {
    return getPrimeFactors(factorNumber);
  }

  angular
    .module("app")
    .factory("FactorService", FactorService);

}());
