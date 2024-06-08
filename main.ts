// example 1
class Student {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student = new Student("John Doe", 30);
student.displayDetails();
//inheritance
class Univercity extends Student {
    private faculty: string;

    constructor(name: string, age: number, faculty: string) {
        super(name, age);
        this.faculty = faculty;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Faculty: ${this.faculty}`);
    }
}

const univer = new Univercity("Jane Doe", 35, "Finance");
univer.displayDetails();

//example 2
class Animal {
    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}
//inheritance
class Dog extends Animal {
    private breed: string;

    constructor(breed: string) {
        super("Dog");
        this.breed = breed;
    }

    getBreed() {
        return this.breed;
    }
}

const dog = new Dog("Labrador");
console.log("Type:", dog.getType()); 
console.log("Breed:", dog.getBreed()); 




// example 3
class Counter {
    count: number;

    constructor() {
        this.count = 10;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    getCount() {
        return this.count;
    }
}
 //inheritance
/*class FlexibleCounter extends Counter {
    increaseBy(amount: number) {
        this.count += amount;
    }

    decreaseBy(amount: number) {
        this.count -= amount;
    }
}

const counter = new FlexibleCounter();

const increaseAmount: number = parseInt(prompt("Enter the amount to increase:") || '0');
counter.increaseBy(increaseAmount);
console.log("After increasing:", counter.getCount());

const decreaseAmount: number = parseInt(prompt("Enter the amount to decrease:") || '0');
counter.decreaseBy(decreaseAmount);
console.log("After decreasing:", counter.getCount());*/



//example 4 
class User {
     name: string;
     age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user = new User("Alice", 30);
user.greet(); 
 //inheritance
class Users extends User {
    job: string
    constructor(name: string, age: number, job: string) {
        super(name, age);
        this.job = job;
    }
    fn() {
        console.log(` ${this.name} is ${this.age} is years old and He is ${this.job}`)
    }
}
const users = new Users("John", 40, "Doctor")
users.fn();

//example 5
class StringMethod {
    public inputString: string;

    constructor(inputString: string) {
        this.inputString = inputString;
    }

    toUpperCase(): string {
        return this.inputString.toUpperCase();
    }
}
//inheritance
class ReverseString extends StringMethod {
    constructor(inputString: string) {
        super(inputString);
    }

    reverse(): string {
        return this.inputString.split('').reverse().join('');
    }
}

const originalString = "hello";
const strings = new StringMethod(originalString);
console.log("Uppercase:", strings.toUpperCase()); 

const reverseString = new ReverseString(originalString);
console.log("Reversed:", reverseString.reverse());
