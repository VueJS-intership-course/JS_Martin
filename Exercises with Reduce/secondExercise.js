function stringConcat(arr) {
  const result = arr.reduce((acc, currentValue) => {
    return acc.toString() + currentValue.toString();
  });

  return result;
}

console.log(stringConcat([1, 2, 3])); // "123"
