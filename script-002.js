// Javascript Data Types
// String
// Number
// Boolean
// Undefined
// Object

console.log('Namaste JavaScript');

// let a = 24;      //number data-type
// let a = true;    //boolean data-type
let a = 'Namaste';  //string data-type

console.log('The value of a is: ', a);

console.log('The typeof (a) is: ', typeof(a));


// -- Javascript type conversion
// Important  Notes
// 1. JavaScript considers 0 as false and all non-zero numbers as true. And, if true is converted to a number, the result is always 1.
// 2. String() takes null and undefined and converts them to string.
// 3. In JavaScript, undefined, null, 0, NaN, "converts to false. ALl other values give true."
// Number()
// String()
// Boolean()



a = 2;
console.log('The typeof (a) is: ', typeof(a));

a = '2';
a = a + 1;
console.log(a);
console.log('The typeof (a) is: ', typeof(a));

a = '2';
a = Number(a) + 1;
console.log(a);
console.log('The typeof (a) is: ', typeof(a));

a = String(a);
console.log(a);
console.log('The typeof (a) is: ', typeof(a));
