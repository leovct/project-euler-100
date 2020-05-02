/**
 * Find the sum of all the primes below n
 * @param {int} n 
 */
function primeSum(n) {
    let primes = [2];
    let isPrime = true;
    // return an array containing the prime numbers below n
    for(let i = 3; i < n; i+= 2) {

        for(let j = 0; primes[j] <= Math.ceil(Math.sqrt(n)); j++) {
            if (i % primes[j] == 0) {
                // 'number' can be divided by another prime number thus 'number' is not a prime number
                isPrime = false; 
                break;
            }
        }

        if(isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }

    // return the sum of the prime numbers in the array
    return primes.reduce((sum,x) => sum+x, 0);
}