function city(obj) {
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
city({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
