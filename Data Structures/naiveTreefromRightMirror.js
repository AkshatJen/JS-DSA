const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let iterator = Math.ceil(Math.log2(array.length));
console.log(iterator);

let results = [];

//console.log(results)
const recurse = (rightmost) => {
  
  if(array[rightmost-1] !== null){
    
    results.push(array[rightmost-1]);
    
  }
  else {
    recurse(rightmost-1);
  }
}


for(let i = 1 ; i <iterator ; i = i + 1){
  let rightmost = Math.pow(2,i)-2;
//console.log(Math.pow(2,i)-2);
  if(array[rightmost]){
  results.push(array[rightmost]);
  }
  else{
    recurse(rightmost);
  }
 
}

results.push(array[array.length-1]);


console.log(results)