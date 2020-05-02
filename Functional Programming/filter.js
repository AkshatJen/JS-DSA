const arr = [0,1,2,3,4,5,6,7,8,9.0,"10",11,"12.01"];

const isEven = value => value%2 === 0 ? true : false;

const isNumber = value => typeof(value) === "number" ? true : false;

const intIt = value => parseInt(value);

const filterEvenArray = arr => arr.filter(isEven);


const numberedFilteredArray = arr.map(intIt).filter(isNumber).filter(isEven);

console.log(numberedFilteredArray);


//console.log(filterEvenArray(arr));