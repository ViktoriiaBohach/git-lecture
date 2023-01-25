// Variables names
// camelCase - variables, the format indicates the separation of words with a single capitalized letter, with first lower case
// snake_case- variables, the style of writing in which each space is replaced with an underscore (_) character
// kebab-case - directories names, dash case
// PascalCase - class names, example: ThisIsPascalCase, it's called also UpperCamelCase

//  register plays role in decraring variables names: number, Number, nuMber...
// let variable, variable names can consist of letters, numbers, but not start from special symbols and numbers, except $, _ and keywords
   let $number = 5;
   console.log($number);
   let _number = 6;
   console.log(_number);
   // let 1number = 5;
   // variable names cannot start from numbers 
   //  let if=5;
   //  variable names cannot be named by keywords like let, const, if etc.

  //  John Doe as a result of let variable declared
  let x = "John Doe";
  console.log(x);

  // let must be Declared before use
  console.log(y);
  let y = "John Doe";
  // Cannot access 'x' before initialization

  // let have Block Scope, it means that if let is declared inside a {} block, then block cannot be accessed from outside the block: область видимості змінної
  // область видимості змінних var і let відрізняється
  {
    let z = 2;
  }
  console.log(z);
  // x can not defined
 

   //   var works in this case
  {
    var b = 2;
  }
  console.log(b);

  // let cannot be Redeclared
  let a = "John Doe";
  // let a = 0;
  console.log(a);
  // SyntaxError: 'x' has already been declared

  // let variable value can be changed
  let number2 = 5;
  number2=10;
  console.log(number2);

// const variable can not be changed
   const userScore=2000;
   userScore=10;
   console.log(userScore);
   // Assignment to constant variable.

// object
    const obj = {
    age: 20
    };
    console.log(obj);

// object value can not be changed in this way
const obj1 = {
    age: 20
    };
    obj1 = 5;
    console.log(obj1);
    // Assignment to constant variable

    // object value can be changed
const obj2 = {
    age: 20
    };
    obj2.age = 44;
    console.log(obj2);
   

// var ()old variable version 
  var oldVariable = 'Dima';
  oldVariable = 'Vanya';
  console.log(oldVariable);

//   var exists in the memory before it was initialized
  console.log(firstName);
  var firstName = 'someName';
//   undefined, not informative log

// let variable is not initialized
console.log(firstName1);
  let firstName1 = 'someName';
//   Cannot access 'firstName1' before initialization

// let може не працювати зі старими версіями браузера: можна чекнути тут: canIuse.com

// variables naming

let c = 3000;
let b = 2000;

// 100 code lines

console.log('Ширина авто: ' + c + ' довжина: ' + b);

let width = 3000;
let length = 2000;

console.log('Ширина авто: ' + width + ' довжина: ' + length);

let vechileBodyWigth = 3000;
let vechileBodyLength = 2000;

console.log('Ширина авто: ' + vechicleBodyWidth + ' довжина авто: ' + vechicleBodyLength);

// same codestyle

let carBodyWigth = 3000;
let machineBodyLength = 2000;

