// They are turning on the Christmas lights 🎄 in the city and, as every year, they have to be fixed!

// The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate.That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

// We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the minimum number of lights that need to be changed for the colors to alternate.


// console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (you change the fourth light to 🔴)

// console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (you change the second light to 🟢 and the third to 🔴)

// console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (they are already alternating)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (you change the second light to 🟢)
// console.log(adjustLights(['🔴']))
// console.log(adjustLights(['🔴', '🟢']))
// console.log(adjustLights(['🟢', '🔴', '🔴', '🔴', '🔴']))
// console.log(adjustLights(['🔴', '🔴', '🔴', '🔴', '🔴']))

function adjustLights(lights) {

    let changes1 = 0, changes2 = 0;
    let colors = ['🔴', '🟢'];

    for (let i = 0; i < lights.length; i++) {
        if (lights[i] !== colors[i % 2]) {
            changes1++;
        }
        if (lights[i] !== colors[(i + 1) % 2]) {
            changes2++;
        }
    }

    return Math.min(changes1, changes2);

}