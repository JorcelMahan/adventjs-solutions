// What an idea Sam Elfman has had! He wants to offer a service that creates a customized Christmas tree 🎄 in a matter of seconds.

// To create it, we are given a string to form the tree and a number that indicates its height.

// Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height.At least, they will always pass us one.

// We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

// For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:


// Note:
// The tree should always be centered, for that reason add blank spaces to the left of each line.
// Create spaces only to the left of each line of the tree.Do not leave blank spaces to the right.
// The ornaments have a white space between them for separation.


function createChristmasTree(ornaments, height) {

    let ornament = 0
    const treeArr = []

    for (let i = 1; i <= height; i++) {
        let line = ' '.repeat(height - i)
        for (let k = 1; k <= i; k++) {
            line += ornaments[ornament % ornaments.length]
            ornament++
            if (k < i) {
                line += ' '
            }
        }
        treeArr.push(line)
    }

    const trunk = ' '.repeat(height - 1) + '|'

    return treeArr.join('\n') + '\n' + trunk + '\n'


}




console.log(createChristmasTree('123', 4))