// Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

// Your task is to write a function that, given a size n(integer), generates a drawing of a 3D gift using ASCII characters.

// The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/

// Important: We have been told that there is always to leave a newline at the end of the drawing.


function drawGift(size, symbol) {

    if (size === 1) return '#' + '\n';

    let draw = '';
    const lines = '#'
    const linesTotal = size - 2;

    draw += ' '.repeat(size - 1) + lines.repeat(size) + '\n';

    for (let i = 2; i <= size - 1; i++) {

        draw += ' '.repeat(size - i) + '#' + symbol.repeat(linesTotal) + '#' + symbol.repeat(i - 2) + '#' + '\n';

    }


    draw += lines.repeat(size) + symbol.repeat(linesTotal) + '#' + '\n';


    for (let i = size - 1; i >= 2; i--) {
        draw += '#' + symbol.repeat(linesTotal) + '#' + symbol.repeat(i - 2) + '#' + '\n';
    }

    draw += lines.repeat(size) + '\n';


    return draw;
}