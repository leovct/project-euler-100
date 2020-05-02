/**
 * Find the n-th prime number
 * @param {int} n 
 */
function nthPrime(n) {
    let primes = [2];
    let number = 3;
    let isPrime = true;

    while (primes.length < n) {
        // Loop through all the prime numbers below the square root of 'number' in order to find if 'number' is a prime number of not
        for(let i = 0; primes[i] <= Math.ceil(Math.sqrt(number)); i++) {
            if (number % primes[i] == 0) {
                // 'number' can be divided by another prime number thus 'number' is not a prime number
                isPrime = false; 
                break;
            }
        }

        if(isPrime) {
            primes.push(number);
        }
        isPrime = true; // reset the boolean

        // increment num (optimization technique to increment by 2 because we start at 3 so we will avoid all even numbers which are not prime because 2 divide them and 2 is the only even prime number)
        number += 2;
    }

    return primes[primes.length-1];
}