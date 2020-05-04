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

console.log(factorialIterative(5));