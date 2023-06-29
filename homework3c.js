function isPrime(num) // 1
{
    if (num <= 1)  { // 1
      return false; // 1
    }
    for (let i = 2; i <= Math.sqrt(num); i++) // 1 
    {
      if (num % i == 0) //1 
      {
        return false; //1 
      }
    }
    return true; // 1
  }
  
  let from = 12;    // 1
  let to = 25;      // 1
  
  let sum = 0;      // 1
  let count = 0;    // 1
  let primes = [];  // 1
  
  for (let i = from; i <= to; i++) // 1
  {
    if (isPrime(i)) //1
     { 
      sum += i; // 1
      count++; // 1
      primes.push(i); // 1
    }
  }
  
  let average = sum / count;  // 1
  let sumExpression = primes.join('+'); // 1

  console.log(`Ortalama ${average} (${sumExpression})/${count}`); // 1

  // bigO = O(1)