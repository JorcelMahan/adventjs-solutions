// In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.

// A palindrome is a word that reads the same forwards and backwards.The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.

// Create a function getIndexsForPalindrome that receives a string and returns:

// If it is already a palindrome, an empty array.
// If it is not possible, null.
// If a palindrome can be formed with one change, an array with the two positions(indexes) that must be swapped to create it.

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa'))// [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null

// If the palindrome can be formed with different swaps, always return the first one found.

function getIndexsForPalindrome(word) {

    if (word === word.split('').reverse().join('')) {
        return []
    }

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            let swapped = word.split('');
            let temp = swapped[i];
            swapped[i] = swapped[j];
            swapped[j] = temp;
            if (swapped.join('') === swapped.reverse().join('')) {
                return [i, j];
            }
        }
    }

    return null;


}