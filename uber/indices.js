//given an array turn in into a new array where indices
//is multiplication of all but itself

const arr = [2, 7, 5, 10];

const total = arr.reduce((first, second) => first * second);

const calculateNewArray = arr.map((x) => total / x);

console.log(calculateNewArray);
