/*
const names: Array<string> = ['Mike', 'Max'];
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });

type Lengthy = {
  length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'Mike' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Mike');
textStorage.addItem('Yorick');
textStorage.removeItem('Mike');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
numberStorage.addItem(7);
numberStorage.addItem(99);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Mike' });
// objStorage.addItem({ name: 'Jolene' });

// objStorage.removeItem({ name: 'Mike' });
// console.log(objStorage.getItems());

type User = {
  id: number;
  name: string;
};

class UserStorage<T extends User> {
  private data: T[] = [];

  addUser(user: T) {
    this.data.push(user);
  }

  removeUser(id: number) {
    this.data = this.data.filter((user) => user.id != id);
  }

  getUsers() {
    console.log(this.data);
  }
}

const userStorage = new UserStorage<User>();

const getRandomId = () => {
  return Math.round(Math.random() * 9 + 1);
};

userStorage.addUser({ id: 1, name: 'John' });
userStorage.addUser({ id: 2, name: 'Tomas' });
userStorage.addUser({ id: 3, name: 'Grace' });

userStorage.getUsers();
userStorage.removeUser(3);
userStorage.getUsers();
*/

type CourseGoal = {
  title: string;
  description: string;
  completeUntil: Date;
};

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Mike', 'Anna'];
names.push('Tony');
