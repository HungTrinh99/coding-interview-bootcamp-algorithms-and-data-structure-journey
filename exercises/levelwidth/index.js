// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0];
    const separator = 's';
    const arr = [root, separator];

    while (arr.length) {
        const node = arr.shift();
        if (node === separator) {
            arr.push(separator);
            counters.push(0);
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
