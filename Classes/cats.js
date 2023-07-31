function cats (array) {

    class Cat {
        constructor (catName, age) {
            this.name = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of array) {
        let [name, age] = line.split(' ');

        let cat = new Cat(name, age);
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])