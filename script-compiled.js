'use strict';

// Zadanie 1

var firstWord = 'Hello';
var secondWord = 'World';

console.log(firstWord + ' ' + secondWord);

// Zadanie 2

function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


  return x * y;
}

var test1 = multiply(5, 6);
console.log(test1);

// Zadanie 3

function argSum() {
  for (var _len = arguments.length, theArgs = Array(_len), _key = 0; _key < _len; _key++) {
    theArgs[_key] = arguments[_key];
  }

  return theArgs.reduce(function (previous, current) {
    return previous + current;
  }) / theArgs.length;
}

console.log(argSum(3, 2, 4));

// Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var first = grades[0],
    sec = grades[1],
    th = grades[2],
    fort = grades[3],
    fiv = grades[4],
    six = grades[5],
    sev = grades[6],
    eight = grades[7],
    nine = grades[8];


console.log('zadanie 4: ' + argSum(first, sec, th, fort, fiv, six, sev, eight, nine));

// Zadanie 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var name = data[2],
    surname = data[4];


console.log(name + ' ' + surname);
