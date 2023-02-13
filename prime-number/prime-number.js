function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
            return true;
        }
        return false;
    }
}

console.log(prime(3));
console.log(prime(5));
console.log(prime(6));
console.log(prime(7));
console.log(prime(8));
console.log(prime(10));

