// this is a demo on how to use the filter map and reduce 
// we are also going to e learning on how to chain them together

const arr = [0,1,2,3,4,5,6,7,8,false, "new test" ,"awesome code"];

let filteredArray = arr.filter(x=> x%2 === 1);




// this will give an empty array because the difference between the 
// "==" which is an equality operator check && "===" is identity operator check
// if used the == it should use false as 0 and true as 1 
// in case of === it should give a [] empty array since the the values inside the array dont match the type

//filter function is basically a condition check which can be applied to every individual item in the array
//or list, so if we run the below console code it will give you false from the  
// we can also filter the string aswell if desired

//console.log(arr.filter(x=> (x%2 == false)|| (typeof(x) == "string")));

console.log("\n ==========filtered array of odd numbers============== \n\n");
console.log(filteredArray);


