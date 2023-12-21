function autonomousDrive(store, movements) {
    let robotPosition = [0, 0];
    let initialPosition = [0, 0];

    // Helper function to replace a character at a specific index in a string
    function replaceAt(string, index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }

    // Find the initial position of the robot
    for (let i = 0; i < store.length; i++) {
        let j = store[i].indexOf('!');
        if (j !== -1) {
            robotPosition = [i, j];
            initialPosition = [i, j];
            break;
        }
    }

    // Iterate over the movements
    for (let movement of movements) {
        let newPosition = [...robotPosition];

        // Calculate the new position
        switch (movement) {
            case 'R':
                newPosition[1]++;
                break;
            case 'L':
                newPosition[1]--;
                break;
            case 'U':
                newPosition[0]--;
                break;
            case 'D':
                newPosition[0]++;
                break;
        }

        // Check if the new position is within the store boundaries and is not an obstacle
        if (newPosition[0] >= 0 && newPosition[0] < store.length &&
            newPosition[1] >= 0 && newPosition[1] < store[0].length &&
            store[newPosition[0]][newPosition[1]] !== '*') {
            // Update the robot's position
            robotPosition = newPosition;
        }
    }

    // Clear the initial position
    store[initialPosition[0]] = replaceAt(store[initialPosition[0]], initialPosition[1], '.');

    // Return the store with the robot's final position
    store[robotPosition[0]] = replaceAt(store[robotPosition[0]], robotPosition[1], '!');

    return store;
}

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)