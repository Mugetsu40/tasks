function roundToFive(num) {
    let roundedNum = Math.round(num);
    let remainder = roundedNum % 5;
    if (roundedNum % 5 == 0) {
        return roundedNum;
    }
    if (remainder >= 3) {
        while (roundedNum % 5 !== 0) {
            roundedNum += 1;
        }
    } else {
        while (roundedNum % 5 !== 0) {
            roundedNum -= 1;
        }
    }
    return roundedNum;
}

console.log(roundToFive(27));
console.log(roundToFive(27.8));
console.log(roundToFive(41.7));


