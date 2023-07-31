const array = [
  { key: 'apple', count: 1 },
  { key: 'orange', count: 40 },
  { key: 'banana', count: 158 },
];

// const obj = Object.fromEntries(array.map(({key, count}) => [key, count]));

const obj = array.reduce((acc, currentValue) => {
  acc[currentValue.key] = currentValue.count;
  return acc;
}, {});

console.log(obj);
