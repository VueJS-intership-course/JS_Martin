function convertToObject (str) {
    let obj = JSON.parse(str);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')