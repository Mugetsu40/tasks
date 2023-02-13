function printFormatedCities(arr) {
    let str = '';
    let i = 0;
    while (i < arr.length) {
        str= str + arr[i]+',';
        i++;
    }
    return str.replace(/.$/,".");
}
    
let printFormatedCities2 = (arr) => arr.join(",")+".";
   
let example = ["Москва","Санкт-Петербург","Воронеж"];

console.log(printFormatedCities(example));
console.log(printFormatedCities2(example));