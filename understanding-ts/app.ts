interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person = {
  name: 'Tomas',
  age: 29,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there - I am');
