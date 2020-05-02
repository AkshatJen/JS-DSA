const arr = [1,2,3,4];
const arr1 = [0,2,4,6,8,10];

const makeDouble = value => {
    
    return value * 2;
}
// if no curly braces = > then its equivalent to return 
const makeSquare = value => value * value;


const makeDoubleEach = arr =>  { return arr.map(makeDouble); }

const makeSquareEach = arr => { return arr.map(makeSquare); }

const doubleSquared = arr.map(makeDouble).map(makeSquare);

console.log(doubleSquared);

//console.log(makeArrDouble(arr));