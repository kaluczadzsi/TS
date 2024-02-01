// const person: { name: string; age: number } = {
//   name: 'Gabor',
//   age: 30,
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
