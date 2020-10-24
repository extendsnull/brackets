module.exports = function check(str, bracketsConfig) {
    const bracketsPairs = Object.fromEntries(bracketsConfig);

    const temp = str.split('').reduce((accumulator, current) => {
        if (accumulator[0] === current) {
            accumulator.shift();
        } else if (bracketsPairs[current]) {
            accumulator.unshift(bracketsPairs[current]);
        } else {
            accumulator.push(false);
        }

        return accumulator;
    }, []);

    return !temp.length;
}
