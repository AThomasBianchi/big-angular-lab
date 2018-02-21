(function() {
  var factorNumber;
  function FactorService() {
    return {
      primeFactor: primeFactor,
      isPrime: isPrime,
      setNumber: setNumber,
      getFactors: getFactors
    }
  }

  function isPrime(num) {
    for (var i=2; i<num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function primeFactor(bigNum) {
    var pfs = [];
    var i = 2;
    if (bigNum === 1 || bigNum === 0) {
      return [ "That number is too small to have a prime factor." ]
    }
    while (i <= bigNum) {
      if ( !(bigNum % i === 0) || !(isPrime(i)) ) {
        i++;
      } else {
        pfs.push(i);
        bigNum = bigNum / i;
        i = 2;
      }
    }
    return pfs;
    console.log("Prime Factorial List:", pfs);
  }

  function setNumber(inputNumber) {
    factorNumber = inputNumber;
    console.log(factorNumber);
  }

  function getFactors() {
    return primeFactor(factorNumber);
  }

  angular
    .module("app")
    .factory("FactorService", FactorService);

}());


// function isPrime(num) {
//   for (var i=2; i<num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
//
//
// function primeFactor(bigNum) {
//   var pfs = [];
//   var i = 2;
//   while (i <= bigNum) {
//     if ( !(bigNum % i === 0) || !(isPrime(i)) ) {
//       i++;
//       continue
//     // } else if (!isPrime(i)) {
//     //    i++;
//     //    continue
//     } else {
//       pfs.push(i);
//       bigNum = bigNum / i;
//       i = 2;
//     }
//   }
//   return pfs;
// }
