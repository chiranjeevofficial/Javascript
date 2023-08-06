// dry: don't repeat yourself
// function name(parameter1, parameter2, ... parameterN) {
//     //code here
//     return something;
// }

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 1));

function addSquare(x, y) {
    x = sqr(x);
    y = sqr(y);
    function sqr(n) {
        return n * n;
    }
    return x + y;
}

console.log(addSquare(2,5));