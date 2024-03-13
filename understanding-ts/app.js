var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
var user1;
user1 = new Person('John Doe');
console.log(user1);
user1.greet('Hi there - I am');
