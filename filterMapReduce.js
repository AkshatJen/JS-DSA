// this is a demo on how to use the filter map and reduce
// we are also going to e learning on how to chain them together

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, "9", false, "new test", "awesome code"];
console.log("\n==========Original Array============== \n");
console.log(arr);
console.log("\n");

let filteredArray = arr.filter((x) => typeof(parseInt(x))=="number" && x%2 == 1);

// this will give an empty array because the difference between the
// "==" which is an equality operator check && "===" is identity operator check
// if used the == it should use false as 0 and true as 1
// in case of === it should give a [] empty array since the the values inside the array dont match the type

//filter function is basically a condition check which can be applied to every individual item in the array
//or list and reduces it to the element which have met the conditions truely 
// we can also filter the string aswell if desired

//console.log(arr.filter(x=> (x%2 == false)|| (typeof(x) == "string")));

console.log("===============filtered array of odd numbers====================== \n");
console.log(filteredArray + "\n\n");

//mapping works on all the elements of the array and does a certain task, here to square

let mappedArray = filteredArray.map(x=> x*x);
console.log("============mapped array of square of odd numbers================= \n");
console.log(mappedArray + "\n\n");

// reduces does as the name suggests, to reduce the list into one

let reducedArray = mappedArray.reduce((x,y)=>x+y);
console.log("=======reduced array of addition of squares of odd numbers======== \n");
console.log(reducedArray + "\n\n");


// using chaining method can also help us achieve similar results
// code above is equivalent to the code below 
let filteredMapReducedArray = arr.filter(x=> typeof(parseInt(x)) === "number" && x%2===1).map(x=>x*x).reduce((x,y)=>x+y);

console.log(filteredMapReducedArray);