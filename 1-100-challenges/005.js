/**
 * Find the smallest positive number that is evenly divisible by all of the numbers from 1 to n
 * @param {int} n 
 */
function smallestMultiple(n) {
    let smallest = 1;
    for(let i = 2; i <= n; i++) {
        smallest = lcm(smallest, i);
    }
    return smallest;
}

/**
 * Find the least common multiple of two positive integers a and b
 * @param {int} a 
 * @param {int} b 
 */
function lcm(a,b) {
    return (a*b)/gcd(a,b);
}

/**
 * Find the greatest common divisor of two integers a and b (Euclid's algorithm)
 * @param {int} a 
 * @param {int} b 
 */
function gcd(a,b) {
    if(b == 0) {
        return a;
    }
    return gcd(b, a % b);
}