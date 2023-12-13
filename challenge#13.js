// The format of the duration is HH: mm: ss, the deliveries start at 00:00:00 and the time limit is 07:00:00.
// Your function must return the time they will lack or the time they will have left over in order to finish the deliveries.The format of the returned duration should be HH: mm: ss.

// If they finish before 07:00:00, the remaining time until 07:00:00 should be displayed with a negative sign.For example, if they have 1 hour and 30 minutes left over, return -01: 30:00

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])) // '-05:29:00'

console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00'])) // '00:30:00'
console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00'])) // '00:00:00'


function calculateTime(deliveries) {
    const deliveryTimesInSeconds = deliveries.reduce((total, duration) => {
        const [hours, minutes, seconds] = duration.split(':').map(Number);
        return total + hours * 3600 + minutes * 60 + seconds;
    }, 0);

    const timeLimitInSeconds = 7 * 3600; // 7 hours in seconds
    const remainingTimeInSeconds = timeLimitInSeconds - deliveryTimesInSeconds;

    const sign = remainingTimeInSeconds <= 0 ? '' : '-';
    const absRemainingTimeInSeconds = Math.abs(remainingTimeInSeconds);

    const hours = Math.floor(absRemainingTimeInSeconds / 3600);
    const minutes = Math.floor((absRemainingTimeInSeconds % 3600) / 60);
    const seconds = absRemainingTimeInSeconds % 60;

    const formattedTime = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;


}

