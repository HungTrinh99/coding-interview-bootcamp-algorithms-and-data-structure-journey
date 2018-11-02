// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    step(1, n);
}

function step(i, n) {
    if (i === n + 1) {
        return;
    }

    console.log('#'.repeat(i) + ' '.repeat(n - i));
    step(i + 1, n);
}

module.exports = steps;
