function total(arr) {
    let sum = 0;
   const result = arr.reduce((acc, currentValue) => {
    return sum = acc + currentValue;
   }, sum)

   return result
}

console.log(total([1,2,3]));