document.getElementById("myBtn").addEventListener("click", function () {
  var fNum = document.getElementById("fnumber").value;
  var lNum = document.getElementById("lnumber").value;
  function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  for (let i = fNum; i <= lNum; i++) {
    const isPrime = checkPrime(i);
    if (isPrime) {
      console.log(`${i} is a prime number`);
    } else {
      console.log(`${i} is not a prime number`);
    }
  }
});
