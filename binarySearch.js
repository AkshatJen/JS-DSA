const arr = [0,1,2,3,4,5,6,7,8];

const binarySearch = (arr,value) =>{
    let min = 0;
    let max = arr.length-1;
    let guess = 0;
    
    //console.log(guess);

    //binary search we always start by assuming that our array is sorted
    //in every step we cut the size of array by 2
  while(min<=max){
    guess = Math.floor(min+max/2);
    if(arr[guess] ===value){
        return guess;
    }
    else{
        if(arr[guess] < value){
            min = guess + 1;

        }
        else{
            max = guess - 1;

        }

    }
  }
  return -1;

}

const answer = binarySearch(arr , 3);

console.log(arr[answer]);