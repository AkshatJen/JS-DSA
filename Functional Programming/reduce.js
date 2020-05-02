const arr = [1,2,3,4,5,6];


const add = (val1, val2) => val1 + val2 ;

const addArray = arr => arr.reduce(add);

console.log(addArray(arr));

