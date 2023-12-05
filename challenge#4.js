const a = decode('hola (odnum)')
console.log(a)  // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c)  // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus

function decode(message) {
    let stack = [];

    for (let i = 0; i < message.length; i++) {
        if (message[i] === '(') {
            stack.push(i);
        } else if (message[i] === ')') {
            let start = stack.pop();
            let reversed = message
                .substring(start + 1, i)
                .split('')
                .reverse()
                .join('');
            message = message.substring(0, start) + reversed + message.substring(i + 1);
            i -= (i - start + 1);
        }
    }

    return message.replace(/[()]/g, '');
}