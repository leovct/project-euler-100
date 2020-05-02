/**
 * Sum the multiples of 3 and 5 below n
 * @param {int} n
 */
function multiplesOf3and5(n) {
    return [...Array(n).keys()].reduce((sum,x) => 
        (x % 3 == 0 || x % 5 == 0) ? sum+x : sum, 0
    );
}