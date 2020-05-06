/**
 * Which starting number, under the given limit n, produces the longest Collatz sequence ?
 * 
 * A Collatz sequence is defined by the set of positive intergers:
 * n -> n/2 (if n is even)
 * n -> 3*n+1 (if n is odd)
 * exemple: starting with 13, we obtain the following sequence: 13 40 20 10 5 16 8 4 2 1 (10 terms).
 * 
 * @param {int} n 
 */
function longestCollatzSequence(n) {
    let maxStartingNumber = 1;
    let maxSequenceLength = 1;
    for(let i = 2; i < n; i++) {
        let length = collatzSequence(i).length;
        if (length > maxSequenceLength) {
            maxStartingNumber = i;
            maxSequenceLength = length;
        }
    }
    return maxStartingNumber;
}

/**
 * Build a Collatz sequence starting with the integer n.
 * @param {int} n 
 */
function collatzSequence(n) {
    let sequence = [n];
    let nextNumber = n;
    while(true) {
        nextNumber = nextCollatzNumber(nextNumber);
        sequence.push(nextNumber);
        // It has not been proved yet (Collatz Problem) but it is thought that all starting numbers finish at 1
        if(nextNumber == 1) {
            break;
        }
    }
    return sequence;
}

/**
 * Return the next collatz number in the sequence
 * @param {int} n 
 */
function nextCollatzNumber(n) {
    if (n % 2 == 0) { // even
        return n/2;
    }
    // odd
    return 3*n+1;
}