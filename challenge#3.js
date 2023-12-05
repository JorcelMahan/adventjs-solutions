function findNaughtyStep(original, modified) {
    const maxLength = Math.max(original.length, modified.length);

    for (let i = 0; i < maxLength; i++) {
        if (original.charAt(i) !== modified.charAt(i)) {
            return original.length > modified.length ? original.charAt(i) : modified.charAt(i);
        }
    }

    return '';
}