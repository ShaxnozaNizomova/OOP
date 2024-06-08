var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// example 1
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Student;
}());
var student = new Student("John Doe", 30);
student.displayDetails();
//inheritance
var Univercity = /** @class */ (function (_super) {
    __extends(Univercity, _super);
    function Univercity(name, age, faculty) {
        var _this = _super.call(this, name, age) || this;
        _this.faculty = faculty;
        return _this;
    }
    Univercity.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Faculty: ".concat(this.faculty));
    };
    return Univercity;
}(Student));
var univer = new Univercity("Jane Doe", 35, "Finance");
univer.displayDetails();
//example 2
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    Animal.prototype.getType = function () {
        return this.type;
    };
    return Animal;
}());
//inheritance
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(breed) {
        var _this = _super.call(this, "Dog") || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.getBreed = function () {
        return this.breed;
    };
    return Dog;
}(Animal));
var dog = new Dog("Labrador");
console.log("Type:", dog.getType());
console.log("Breed:", dog.getBreed());
// example 3
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 10;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    Counter.prototype.decrement = function () {
        this.count--;
    };
    Counter.prototype.getCount = function () {
        return this.count;
    };
    return Counter;
}());
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
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return User;
}());
var user = new User("Alice", 30);
user.greet();
//inheritance
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(name, age, job) {
        var _this = _super.call(this, name, age) || this;
        _this.job = job;
        return _this;
    }
    Users.prototype.fn = function () {
        console.log(" ".concat(this.name, " is ").concat(this.age, " is years old and He is ").concat(this.job));
    };
    return Users;
}(User));
var users = new Users("John", 40, "Doctor");
users.fn();
//example 5
var StringMethod = /** @class */ (function () {
    function StringMethod(inputString) {
        this.inputString = inputString;
    }
    StringMethod.prototype.toUpperCase = function () {
        return this.inputString.toUpperCase();
    };
    return StringMethod;
}());
//inheritance
var ReverseString = /** @class */ (function (_super) {
    __extends(ReverseString, _super);
    function ReverseString(inputString) {
        return _super.call(this, inputString) || this;
    }
    ReverseString.prototype.reverse = function () {
        return this.inputString.split('').reverse().join('');
    };
    return ReverseString;
}(StringMethod));
var originalString = "hello";
var strings = new StringMethod(originalString);
console.log("Uppercase:", strings.toUpperCase());
var reverseString = new ReverseString(originalString);
console.log("Reversed:", reverseString.reverse());
