const quickSort = (arr) => {

if(arr.length<=1) return arr;


const pivot = arr[arr.length-1];
const leftArr = [];
const rightArr = [];


for (let i = 0 ; i < arr.length-1 ;i++){
    if(arr[i] < pivot){
        leftArr.push(arr[i]);
    }
    else{
        rightArr.push(arr[i]);
    }
}
const sortedLeft = quickSort(leftArr);
const sortedRight = quickSort(rightArr);

return [...sortedLeft,pivot, ...sortedRight]; 
//return [].concat(quickSort(leftArr),pivot,quickSort(rightArr));

}

const nums = [5,3,6,9,2,1,0,8,4];

console.log(quickSort(nums));