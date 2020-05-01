/**
 * Find the largest palindrome made from the product of two n-digit numbers (ex: the largest palindrome from the product of two 2-digit numbers is 9009=91*99)
 * @param {int} n 
 */
function largestPalindromeProduct(n) {
    let largestPalindrome = 1;
    let product;
    for(let i = 10**n-1; i >= 1; i--) {
        for(let j = 10**n-1; j >= 1; j--) {
            product = i*j;
            if (isPalindrome(product.toString())) {
              if(product > largestPalindrome) {
                largestPalindrome = product;
              }
            }
        }
    }
    return largestPalindrome;
}

/**
 * Check if n is a palindrome
 * @param {string} n 
 */
function isPalindrome(n) {
    if(n.length % 2 == 0) {
      for(let i = 0; i < n.length/2; i++) {
        if (n[i] != n[n.length-(i+1)]) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
}