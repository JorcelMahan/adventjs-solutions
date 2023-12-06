

// > = Moves to the right
// < = Moves to the left
// * = Can move forward or backward

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5


function maxDistance(movements) {
    let maxRight = 0;
    let maxLeft = 0;

    for (let i = 0; i < movements.length; i++) {
        if (movements[i] === '>') {
            maxRight++;
            maxLeft--;
        } else if (movements[i] === '<') {
            maxRight--;
            maxLeft++;
        } else {
            maxRight++;
            maxLeft++;
        }
    }

    return Math.max(maxRight, maxLeft);

}

