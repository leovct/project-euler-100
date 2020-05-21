/**
 * Count the letters used in total to write all the numbers from 1 to n (inclusive) were written out in words (up to 9999).
 * Note: The function does not count spaces or hypen.
 * i.e. 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 * @param {int} n 
 */
function numberLetterCounts(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        console.log(numberWrittenLength(i));
        sum += numberWrittenLength(i).length;
    }
    return sum;
}

/**
 * Return the length of a number written out in words.
 * @param {int} n 
 */
function numberWrittenLength(n) {
    const letters = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    // Extract unit, dozen, hundred and thousand of the number n
    let unit = n % 10;
    let dozen = (n % 100) - unit;
    let hundred = (n % 1000) - (unit + dozen);
    let thousand = n - (unit + dozen + hundred);

    // Return the number written out in words
    let str;

    if ((n % 100) < 20) {
        str = letters[n % 100];
    } else {
        str = letters[dozen] + letters[unit];
    }

    if (hundred != 0) {
        if (unit + dozen == 0) {
            str = letters[hundred.toString().charAt(0)] + 'hundred' + str;
        } else {
            str = letters[hundred.toString().charAt(0)] + 'hundredand' + str;
        }
    }

    if (thousand != 0) {
        str = letters[thousand.toString().charAt(0)] + 'thousand' + str;
    }
    return str;
}