/**
 * Find the value of the first triangle number to have over n divisors.
 * 
 * The sequence of triangle numbers is generated by adding the natural numbers (ex: the 7th triangle number would be 1+2+3+4+5+6+7=28). The first ten triangle numbers would be: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55.
 * Note: it can be optimized (execution time for n=500 is too slow)
 * 
 * @param {int} n 
 */
function divisibleTriangleNumber(n) {
    // start with the triangle number 1
    let i = 1;
    let triangleNumber = 1;
    let divisors = 1;
    while(divisors < n) {
        // compute the next triangleNumber
        i++;
        triangleNumber = [...Array(i+1).keys()].reduce((sum,x) => sum+x, 0);
        // find its divisors
        divisors = nbrDivisors(triangleNumber);
    }
    return triangleNumber;
}

/**
 * Return number of divisors of n (Sieve algorithm)
 * @param {int} n 
 */
function nbrDivisors(n) {
    let j = 1;
    let x = 0;
    while(n > 0 && n % 2 == 0) {
        n/= 2;
        x++;
    }
    j*= x+1;
    for(let i = 3; i <= Math.sqrt(n); i+= 2) {
        x = 0;
        while(n > 0 && n % i == 0) {
            n/= i;
            x++;
        }
        j*= x+1;
    }
    if (n > 2) {
        j*= 2;
    }
    return j
}