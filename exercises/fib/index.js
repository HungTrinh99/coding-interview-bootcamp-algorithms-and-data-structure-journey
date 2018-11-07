// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n < 2) {
        return n;
    }

    let previous = 0;
    let result = 1;

    for (let i = 2; i <= n; i++) {
        let temp = result + previous;
        previous = result;
        result = temp;
    }

    return result;
}

module.exports = fib;
