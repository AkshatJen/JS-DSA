const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }
  return arr;
};

const arr = [3, 7, 6, 1, 4, 8, 2, 5];

//console.log(insertionSort(arr));
// slice is used to obtain a new array, think it as a slicing something
// slice (from, to element[i-1])
// [0,1,2,3].slice(1,3) -> would give [1,2]

//console.log(arr.slice(1,5));

// splice is replace or modifying an array/list
// splice (index, counts , new value)

//arr.splice(3,0,"happy");
console.log(insertionSort(arr));
