function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Tony';

  constructor() {
    console.log('Creating person object...');
  }
}

const p1 = new Person();
console.log(p1);
