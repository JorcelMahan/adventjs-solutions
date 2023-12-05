function findFirstRepeated(gifts) {

    let seen = {};
    for (let i = 0; i < gifts.length; i++) {
        if (seen[gifts[i]]) {
            return gifts[i];
        }
        seen[gifts[i]] = true;
    }
    return -1;
}
