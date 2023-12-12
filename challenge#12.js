
// The characters from A to Z degrade from uppercase to lowercase(A - Z ⇒ a - z)
// Letters degrade in a series of characters in this order: a - z ⇒ # ⇒ + ⇒ : ⇒ . ⇒ empty space
// Characters that are not letters(like digits) do not degrade.


console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta cl#us is comin#'
)) // true
console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'p#nt: cla#s #s c+min#'
)) // false (for the initial p)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (there is a # where it should not be)

console.log(checkIsValidCopy('Santa Claus', 'sant##claus+')) // false (there is a + where it should not be)

console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (there is a # where it should not be)

function checkIsValidCopy(original, copy) {

    if (original.length !== copy.length) return false

    const degradeChars = ['#', '+', ':', '.', ' ']

    for (let i = 0; i < original.length; i++) {
        if (original[i] === ' ' && copy[i] !== ' ') return false
        if (original[i].toLowerCase() === copy[i] || degradeChars.includes(copy[i])) continue
        return false
    }
    return true
}