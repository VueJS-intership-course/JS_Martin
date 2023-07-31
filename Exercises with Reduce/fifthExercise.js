function flatten(arr) {
    const result = arr.reduce((acc, currenValue) => {
        return acc.concat(currenValue);
    }, [])

    return result;
}

var arrays = [['1', '2', '3'], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
