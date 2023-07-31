function convertToJSON (name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let obj = JSON.stringify(person);

    console.log(obj);
}
convertToJSON('George', 'Jones',
'Brown' )