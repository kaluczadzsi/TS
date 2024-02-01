// const person: { name: string; age: number } = {
//   name: 'Gabor',
//   age: 30,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Gabor',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
