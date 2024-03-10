const button = document.querySelector('button');
const add = (a: number = 2, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add());
