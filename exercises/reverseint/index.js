// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let result = 0;
    let j = Math.abs(n).toString().length - 1;

    while (true) {
        result += Math.pow(10, j--) * (n % 10);
        n = Math.trunc(n / 10);
        if (j < 0) {
            break;
        }
    }

    return result;
}

module.exports = reverseInt;