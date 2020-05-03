//closure example of memoization 

const calculate10 = value => value*10;

const memoizedTimes10 = () => {

    const cache = {};
    return(value) =>{
        if(cache[value]) return cache[value];

        else{
            cache[value] = calculate10(value);
            return cache[value];
        }

    } 
}

const newValue = memoizedTimes10();

const answer = newValue(5);

console.log(answer);
