// const person: { name: string; age: number } = {
//   name: 'Gabor',
//   age: 30,
// };

const person = {
  name: 'Gabor',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
