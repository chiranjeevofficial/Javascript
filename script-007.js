const fruits = ['Apple', 'Manago', 'Orange', 24, true];
console.log(fruits);

const num = [21, 22, 23, 24, 25];
console.log(num);
console.log(num.length);
console.log('indexof(21) is: ',num.indexOf(21));
console.log('includes(22) is: ',num.includes(22));
num.push(30);
console.log('push(30):',num);
num.unshift(35);
console.log('unshift(35):',num);
num.pop();
console.log('pop()',num);
num.shift();
console.log('shift()',num);

const subNum = num.slice(1,4)
console.log(subNum);
