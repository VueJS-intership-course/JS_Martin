class Shape {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
}

class Triangle extends Shape {
    area(width, height) {
        return width * height;
    }
}

class Rectangle extends Shape {
    area(width, height) {
        return width * height;
    }
}

const triangle = new Triangle();
console.log(triangle.area(5, 4));

const rectangle = new Rectangle();
console.log(rectangle.area(5, 5));