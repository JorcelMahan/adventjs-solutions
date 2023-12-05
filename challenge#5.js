// Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road.The road is represented by a string of characters, where:

// . = Road
// S = Santa's Sled
// * = Open barrier
// | = Closed barrier
// Example of a road: S...|....|.....

// Each unit of time, the sled moves one position to the right.If it encounters a closed barrier, it stops until the barrier opens.If it is open, it goes through directly.

// All barriers start closed, but after 5 units of time, they all open forever (* = Open barrier)

// Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

// result:
// [
//   'S..|...|..', // initial state
//   '.S.|...|..', // sled advances on the road
//   '..S|...|..', // sled advances on the road
//   '..S|...|..', // sled stops at the barrier
//   '..S|...|..', // sled stops at the barrier
//   '...S...*..', // barrier opens, sled advances
//   '...*S..*..', // sled advances on the road
//   '...*.S.*..', // sled advances on the road
//   '...*..S*..', // sled advances on the road
//   '...*...S..', // passes through the open barrier
// ]


// The result is an array where each element shows the road at each unit of time.


function cyberReindeer(road, time) {
    let result = [road];
    let roadArray = road.split('');


    const barrierIndexes = [];
    for (let i = 0; i < roadArray.length; i++) {
        if (roadArray[i] === '|') {
            barrierIndexes.push(i);
        }
    }

    for (let t = 1; t < time; t++) {
        let sledIndex = roadArray.indexOf('S');

        if (t < 5) {
            if (roadArray[sledIndex + 1] !== '|') {
                roadArray[sledIndex] = '.';
                roadArray[sledIndex + 1] = 'S';
            }
        } else {

            roadArray[sledIndex] = '.';
            roadArray[sledIndex + 1] = 'S';


            for (let i = 0; i < barrierIndexes.length; i++) {

                if (barrierIndexes[i] !== sledIndex + 1) {
                    roadArray[barrierIndexes[i]] = '*';
                }
            }


        }

        result.push(roadArray.join(''));
    }

    return result;
}


console.table(result)
