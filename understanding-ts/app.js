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
*/
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Mike' }, 'name'));
