// usual way of doing memoization
const cache = {};

const calculate10 = value => value*10;

const memoize10 = value =>{
    // if {5 : 50} the return 50
    // the reason its not in function is to avoid the cache cleared on every function call and to mantain the value of the cache
    if(cache[value]) return cache[value];

    cache[value] = calculate10(value);
    return cache[value];
}

console.log(memoize10(5));

console.log(memoize10(5));