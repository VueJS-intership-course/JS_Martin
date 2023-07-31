class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setValue(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Zebra extends Animal {
    constructor(name, age, origin) {
        super(name, age);
        this.origin = origin;
    }

    zebraMessage() {
        console.log(`Name: ${this.name}, ${this.age} years old. Origin: ${this.origin}.`);
    }
}

class Dolphin extends Animal {
    constructor(name, age, origin) {
        super(name, age);
        this.origin = origin;
    }

    dolphinMessage() {
        console.log(`Name: ${this.name}, ${this.age} years old. Origin: ${this.origin}.`);
    }
}

const zebra = new Zebra('Mike', 15, 'Savanna');
// zebra.setValue('Mike', 15);
zebra.zebraMessage();

const dolphin = new Dolphin('Fishy', 5, 'Ocean');
// dolphin.setValue('Fishy', 5);
dolphin.dolphinMessage()