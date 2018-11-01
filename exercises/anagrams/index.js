// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let aMap = {};
    let bMap = {};

    stringA.replace(/[^\w]/g, '').toLocaleLowerCase();
    stringB.replace(/[^\w]/g, '').toLocaleLowerCase();

    for (let i = 0; i < stringA.length; i++) {
        aMap[stringA[i]] = aMap[stringA[i]] + 1 || 1;
    }

    for (let i = 0; i < stringB.length; i++) {
        bMap[stringB[i]] = bMap[stringB[i]] + 1 || 1;
    }

    if (Object.keys(aMap).length !== Object.keys(aMap).length) {
        return false;
    }

    for (let i in aMap) {
        if (!(aMap.hasOwnProperty(i) && bMap.hasOwnProperty(i)) || aMap[i] !== bMap[i]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
