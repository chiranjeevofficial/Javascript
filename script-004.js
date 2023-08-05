// Conditional Statement
// if
// if-else
// Nested if-else
// if-else ladder
// Conditional Operator
//  (statement ? when statement true : when statement false)

let age = 29;

if (age < 18) {
    console.log('You are not elligeble for vote');
}

if (age >= 18) {
    console.log('You are elligeble for vote');
} else {
    console.log('You are not elligeble for vote');
}

if (age >= 18) {
    console.log('You are elligeble for vote');
    if (age >= 23) {
        console.log('You also elligeble to get loan');
    } else {
        console.log('You are not elligeble to get loan');
    }
} else {
    console.log('You are not elligeble for vote');
}

let marks = 70;

if (marks > 95) {
    console.log('A+');
} else if (marks > 90) {
    console.log('A');
} else if (marks > 80) {
    console.log('B');
} else if (marks > 70) {
    console.log('C');
} else if (marks > 60) {
    console.log('low marks for ranking');
}