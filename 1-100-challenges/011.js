/**
 * Find the greatest product of n adjacent numbers in the same direction (up, down, left, right or diagonally) in a given arr grid
 * @param {int[]} arr 
 */
function largestGridProduct(arr, n) {
    // if n is too big
    if (n > arr.length || n > arr[0].length) {
        console.log(`error: can't find ${n} adjacent numbers in a grid: ${arr.length}x${arr[0].length}`);
        return;
    }

    // else: find the greatest product in the grid
    let product = 0;
    let horizontalProduct, verticalProduct, diagonalProductTopLeftBottomRight, diagonalProductTopRightBottomLeft, tmp;
    // Loop through the elements of the array
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length - n + 1; j ++) {
            // Horizontal check
            horizontalProduct = arr[i].slice(j,j+n).reduce((totalProduct,x) => totalProduct*x, 1);
            // Vertical check
            verticalProduct = 1;
            diagonalProductTopLeftBottomRight = 1;
            diagonalProductTopRightBottomLeft = 1;
            for(let k = 0; k < n; k++) {
                verticalProduct *= arr[j+k][i]
                // Diagonal checks
                if(i < arr[i].length - n + 1) {
                    diagonalProductTopLeftBottomRight *= arr[i+k][j+k];
                    diagonalProductTopRightBottomLeft *= arr[i+k][arr[i+k].length-(j+1)-k];
                }
            }
            // Store the maximum
            tmp = Math.max(horizontalProduct, verticalProduct, diagonalProductTopLeftBottomRight, diagonalProductTopRightBottomLeft); 
            if(tmp > product) {
                product = tmp;
            }
        }
    }
    return product
}

const testGrid = [
    [40, 17, 81, 18, 57],
    [74, 4, 36, 16, 29],
    [36, 42, 69, 73, 45],
    [51, 54, 69, 16, 92],
    [7, 97, 57, 32, 16]
];
console.log(largestGridProduct(testGrid, 6));