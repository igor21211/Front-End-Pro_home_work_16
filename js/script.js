'use strict'


const sum = () => {
 let y = 0;
    return function (x) {
       y += x;
       return y;
    };
}

const addSum = sum();

console.log(addSum(3));
console.log(addSum(5));
console.log(addSum(20));