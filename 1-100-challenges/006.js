/**
 * Find the difference between the sum of the squares of the first n natural numbers and the square of the sum
 * Find the difference between the square of the sum of the first natural numers and the sum of the squares
 * @param {int} n 
 */
function sumSquareDifference(n) {
    const sum = n*(n+1)/2;
    const sumOfSquares = n*(n+1)*(2*n+1)/6;
    return sum**2 - sumOfSquares;
}