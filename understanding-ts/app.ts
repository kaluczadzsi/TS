function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const person = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = person.name;
    }
  };
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Tony';

  constructor() {
    console.log('Creating person object...');
  }
}

const p1 = new Person();
console.log(p1);
