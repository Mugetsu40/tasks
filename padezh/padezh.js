function padezh(num) {
    let remainder = num % 10;
    if (num >= 11 && num <= 14) {
        console.log(`${num} компьютеров`);
    }
    if (remainder == 0 || remainder >= 5 && remainder <= 9) {
        console.log(`${num} компьютеров`);
    }
    if (remainder == 1) {
        console.log(`${num} компьютер`)
    }
    if (remainder >= 2 && remainder <= 4) {
        console.log(`${num} компьютера`)
    }
}

padezh(25);
padezh(41);
padezh(1048);
padezh(2);