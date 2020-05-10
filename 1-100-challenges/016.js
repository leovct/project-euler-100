/**
 * Find the sum of the digits of the number 2 to the power of n.
 * @param {int} n 
 */
function powerDigitSum(n) {
    let arr = {
        0: 1
    }
    let remainder = 0;
    let length = 0;
    for(let i = 0; i < n; i++) {
        // Mutiply each digit by 2
        Object.keys(arr).map(x => {
            arr[x] *= 2;
        });
        // Flatten the digits (only keep values below 10)
        length = Object.keys(arr).length;
        for (let j = 0; j < length; j++) {
            // Only keep digit and store the remainder
            remainder = Math.floor(arr[j] / 10);
            arr[j] %= 10;
            // Add the remainder to the next value in arr
            if (remainder > 0) {
                if (typeof arr[j+1] === 'undefined') {
                    arr[j+1] = remainder;
                } else {
                    arr[j+1] += remainder;
                }
            }
        }
    }
    return Object.keys(arr).reduce((sum,x) => sum+arr[x], 0);
}

