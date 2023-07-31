function employees(array) {
    let employeeList = {};

    array.forEach(element => {
        employeeList[element] = element.length;
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}
employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
