const number = 145234;
const numString = "" + number;

let arr = Array.from(numString)

arr = arr.sort((x,y)=>y-x);

arr= arr.reduce((x,y)=>x+y);

const answer = parseInt(arr);

console.log(answer);