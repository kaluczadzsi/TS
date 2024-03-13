var user1 = {
    name: 'Tomas',
    age: 29,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hi there - I am');
