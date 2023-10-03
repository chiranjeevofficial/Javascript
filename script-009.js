// Ordinary function
// function namaste() {
//     console.log('Namaste Javascript');
// }
// namaste();

// Arrow function
// const namaste = () => {
//     console.log('Namaste Javascript');
// };
// namaste();

// when, Arrow function return something
// const sqr = (num) => num * num;
// console.log(sqr(2));

// Callback function : when function passed as argument in another function.
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
}
let result = calculate(2, 3, function (a, b) {
    return a + b;
});
console.log(result);

const product = (num1, num2) => {
    return num1 * num2;
};
result = calculate(3, 5, product);

console.log(result);