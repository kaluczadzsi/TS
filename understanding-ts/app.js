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
*/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Max' }, { age: 30 });
