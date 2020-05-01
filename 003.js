/**
 * Find the largest prime factor of n (brute force method)
 * @param {int} n 
 */
function largestPrimeFactor(n) {
    let number = n;
    let largestFactor = 1;
    let i = 2;
    while(i <= number) {
        if (number % i == 0) {
            largestFactor = i;
            number /= i;
        } else {
            i++;
        }
    }
    return largestFactor;
}