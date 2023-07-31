function towns(array) {

    let towns = {};

    for (const element of array) {
        let [city, latitude, longitude] = element.split(' | ');

        towns.town = city;
        towns.latitude = Number(latitude).toFixed(2);
        towns.longitude = Number(longitude).toFixed(2);

        console.log(towns);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
