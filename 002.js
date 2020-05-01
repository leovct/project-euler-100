/**
 * Sum the even fibonacci numbers below n
 * @param {int} n
 */
function evenFibonacciSum(n) {
    return fibonacciNumbers(n).reduce((sum,x) => 
      x % 2 == 0 ? sum + x : sum, 0  
    );
}

/* Create an array containing all the fibonacci numbers below n
 * @param {int} n 
 */
function fibonacciNumbers(n) {
    let x = 0;
    let y = 1;
    let array = [x,y];
    let res = x + y;
    while (res < n) {
        // append the current fibonacci number to the array
        array.push(res);
        // compute the next fibonacci number
        x = y;
        y = res;
        res = x + y;
    }
    return array;
}


