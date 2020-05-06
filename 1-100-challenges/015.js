/**
 * On a 2 by 2 grid where you can only move to the right (R) and down (D), there are exactly 6 routes to the bottom right corner: RRDD, RDRD, RDDR, DRRD, DRDR, DDRR.
 * The function returns the number of routes in a given grid of size n by n.
 * 
 * The mathematical formula is, to go from (0,0) to (n,k), there are exactly n choose n+k routes.
 * 
 * @param {int} n 
 */
function latticePaths(n) {
    return fact(2*n)/Math.pow(fact(n),2);
}

/**
 * Compute factorial of n.
 * @param {int} n 
 */
function fact(n) {
    if (n == 1) {
        return 1;
    }
    return n * fact(n-1);
}