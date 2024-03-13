var add;
add = function (a, b) {
    return a + b;
};
var Person = /** @class */ (function () {
    function Person(name) {
        if (name) {
            this.name = name;
        }
        else {
            console.log('Hi!');
        }
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
