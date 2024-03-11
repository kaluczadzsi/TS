var button = document.querySelector('button');
var add = function (a, b) {
  if (a === void 0) {
    a = 2;
  }
  if (b === void 0) {
    b = 1;
  }
  return a + b;
};
var printOutput = function (output) {
  return console.log(output);
};
printOutput(add());
