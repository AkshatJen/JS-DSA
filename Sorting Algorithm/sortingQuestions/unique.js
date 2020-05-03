// sorting an array with linear complexity while making sure the elements are unique 

// two ways to solve this answer 
// first is functional way and second is the object way of solving it
const arr = [2,4,3,1,4,3,2,2,2,2,2,2,1,7,6,3,3,3,3,5];


const uniqueArray = arr => {

    const results = [];
    const cache = {};

    for(let i =0 ; i < arr.length ; i++){
        if(!cache[arr[i]]){
            results.push(arr[i]);
            cache[arr[i]] = true;
        }
    }

    return results;
}

const sortArray = arr => arr.sort((a,b)=> a-b);

//strictly functional way of doing things
const newArray = uniqueArray(sortArray(arr));

console.log(newArray);


// this way can allow the chaining of the different methods/functions
const sortedUnique = { 
    cache:{},
    results : [],

    sorting : function(arr){
        if(arr) this.results = arr;
        //this.results = arr;
        this.results.sort((a,b)=> a-b);
        return this;

    },
    unique : function(arr){
        for(let i =0 ; i < arr.length ; i++){
            if(!this.cache[arr[i]]){
                this.results.push(arr[i]);
                this.cache[arr[i]] = true;
            }
        }
        return this;
    
    },
};

sortedUnique.unique(arr).sorting();

console.log(sortedUnique.results)
