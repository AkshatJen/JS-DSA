const callbackFunction10 = value => 10 * value;

const callbackFunction20 = value => 20 * value;


const memoizedClosure = (cb) => {
    const cache = {};

    return(value) =>{
        if(cache[value]) {
            console.log("fetching value from the cache");
            return cache[value];
        }

        else {
            cache[value] = cb(value);
            console.log("value pushed into the cache");
            return cache[value];
        }
    }
}

// freshly value calculated and pushed into the cache 
const memoCallback = memoizedClosure(callbackFunction20);

const memoCallback20 = memoCallback(5);

console.log(memoCallback20);

// value will be fetched from the cache
const memoCallback20Again = memoCallback(5);

console.log(memoCallback20Again);