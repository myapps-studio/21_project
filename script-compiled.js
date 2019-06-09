'use strict';

// Zadanie 1

var firstWord = 'Hello';
var secondWord = 'World';

console.log(firstWord + ' ' + secondWord);

// Zadanie 2

multiply = function multiply(x, y) {

  return x * y;
};

var test1 = multiply(5, 6);
console.log(test1);

// Zadanie 3

function argSum() {
  for (var _len = arguments.length, theArgs = Array(_len), _key = 0; _key < _len; _key++) {
    theArgs[_key] = arguments[_key];
  }

  return theArgs.reduce(function (previous, current) {
    return (previous + current) / theArgs.length;
  });
}

console.log(argSum(1, 2, 3));

// Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

function f() {
  for (var _len2 = arguments.length, grades = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    grades[_key2] = arguments[_key2];
  }

  return grades;
}

console.log(argSum(f(grades)));

// Zadanie 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var third = data[2],
    fifth = data[4];


console.log(third + ' ' + fifth);
