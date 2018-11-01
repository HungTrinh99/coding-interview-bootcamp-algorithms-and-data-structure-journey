// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result = {};
    let max = 0;
    let maxChar = '';

    for (let i = 0; i < str.length; i++) {
        result[str[i]] = result[str[i]] + 1 || 1;

        if (Math.max([max, result[str[i]]]) !== max) {
            max = Math.max([max, result[str[i]]]);
            maxChar = str[i];
        }
    }

    return maxChar;
}

module.exports = maxChar;
