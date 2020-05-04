// this one has a solution to create a Factorial calculator using a memoized approach
// also making use of closure and cache 
// we will be using a iterative approach to solve this 


// 1. Naive Approach 

const factorialCalculator = index => {
    if(index < 2) {
        return 1; 
    }
    else{
        return factorialCalculator(index-1) * index;
    }
}
//console.log(factorialCalculator(5));

//2. Iterative approach - iteration is slightly more performant than recursion 

const factorialIterative = index => {
    const results = [1];

    for(let i = 0 ; i<index ; i++){
        results.push(results[i] * (i+1));
    }
    return results[index];
}

//console.log(factorialIterative(5));

//3 improving the performace using the cache{} object  
const cache = {};
const factorialIterativeCache = index => {
    if(cache[index]) {
        console.log("returned from the cache");
        return cache[index];
    }

    const results = [1];

    for(let i = 0 ; i<index ; i++){
        console.log("=====loop number=====" + i);
        results.push(results[i] * (i+1));
        cache[i+1] = results[i] * (i+1);
    }
    //console.log(results);
    return results[index];
 
}


//console.log(factorialIterativeCache(20));
//console.log(cache);
//console.log(factorialIterativeCache(20));


// 4. best approach with similiar performance as to above while keeping the cache hidden from all the other global 

const factorialIterativeCacheClosure = () =>{
    const cache = {};

    return(index)=>{

    if(cache[index]) {
        //console.log("returned from the cache");
        return cache[index];
    }

    const results = [1];

    for(let i = 0 ; i<index ; i++){
        //console.log("=====loop number=====" + i);
        results.push(results[i] * (i+1));
        cache[i+1] = results[i] * (i+1);
    }
    //console.log(results);
    return results[index];
    }
}

const fib100 = factorialIterativeCacheClosure();
const fibNumber = fib100(20);
console.log(fibNumber);
// console.log(fib100(19));
// console.log(fib100(18));