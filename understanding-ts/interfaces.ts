/* interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name?: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    } else {
      console.log('Hi!');
    }
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person('John Doe');

console.log(user1);
user1.greet('Hi there - I am');
 */
