/**
 * Find the product abc such that the Pythagorean triplet (a,b,c) for which a + b + c = n.
 * A Pythagorean triplet is a set of three natural numbers (a<b<c) for which a**2 + b**2 = c**2
 * @param {int} n 
 */
function specialPythagoreanTriplet(n) {
    let c;
    for(let a = 0; a <= n; a++) {
        for(let b = a+1; b <= n; b++) {
            c = Math.sqrt(a**2 + b**2);
            if (c > b && a+b+c == n) {
                return a*b*c;
            }  
        }
    }
    return NaN; // if no pythagorean triplet found
}