function manufacture(gifts, materials) {
    let possibleGifts = [];
    for (let gift of gifts) {
        let canMake = true;
        for (let char of gift) {
            if (!materials.includes(char)) {
                canMake = false;
                break;
            }
        }
        if (canMake) {
            possibleGifts.push(gift);
        }
    }
    return possibleGifts;
}