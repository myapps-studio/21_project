// Zadanie 1

const firstWord = 'Hello';
const secondWord = 'World';

console.log(`${firstWord} ${secondWord}`);

// Zadanie 2

function multiply (x, y = 1) {

    return x * y;
}

var test1 = multiply(5,6);
console.log(test1);

// Zadanie 3

function argSum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return (previous + current);
    }) / theArgs.length;
  }

console.log(argSum(3, 2, 4));

// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [first, sec, th, fort, fiv, six, sev, eight, nine] = grades;
// console.log(grades.length);

function argSum(first, sec, th, fort, fiv, six, sev, eight, nine) {
  return  grades.reduce((previous, current) => {
    return (previous + current);
  }) / grades.length;
}

console.log(argSum(grades));

// Zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , name, , surname] = data;

console.log(name + ' ' + surname);