// makes arrays flat with reduce:
const array = [1, 3, [4, 5], 6, 7, 8, [9, 10]];

const flatArray = array.reduce((prevValue, currentValue) => {
    return prevValue.concat(currentValue);
}, []);

console.log(flatArray);

// output: [1,3,4,5,6,7,8,9,10]