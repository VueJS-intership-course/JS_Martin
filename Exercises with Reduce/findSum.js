//find a sum of a sequence using reduce
const array1 = [1, 8, 9, -5, 10];

let sum = 0;
const result = array1.reduce((prevValue, currentValue) => {
    return sum = prevValue + currentValue;
}, 0);
console.log(sum);