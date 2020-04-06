// array of unsorted numbers
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2];

//ES6 fat syntax bubble sort function
const bubbleSort = (arr) => {
  //parent loop to go n times
  for (let i = 0; i < arr.length; i++) {
    //child loop go to n-1 times
    for (let j = i + 1; j < arr.length; j++) {
      //const variable required for the swapping of the elements
      let temp = arr[i];
      // condition check if number of the left is greater then right then only swap
      if (arr[i] > arr[j]) {
        //swapping
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  //end of both loop and return the sorted array
  return arr;
};

//console out the sorted array
console.log(bubbleSort(arr));
