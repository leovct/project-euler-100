/**
 * Compute the ten digits of the sum of the numbers in the array arr.
 * @param {int[]} arr 
 */
function largeSum(arr) {
    return parseInt(arr.reduce((sum,x) => parseInt(x)+sum, 0).toString().slice(0,11).split('.').join(''));
}