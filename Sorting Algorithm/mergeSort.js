const mergeSort = (arr) => {
  if (arr.length < 2) {
    console.log("now its size 1");
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log("divided into two");

  // const sortedLeft = mergeSort(left);
  // const sortedRight = mergeSort(right);

  // return merge(sortedLeft, sortedRight);
  console.log(left);
  console.log(right);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  console.log("entering the merge");
  const resultArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      console.log("entering left less then right")
      console.log(resultArray)
      resultArray.push(left.shift());
      console.log("entering left less then right DONE")
      console.log(resultArray)
    } else {
      console.log("entering left bigger then right")
      console.log(resultArray)
      resultArray.push(right.shift());
      console.log("entering left bigger then right DONE")
      console.log(resultArray);
    }
  }
  /*  while (left.length) {
    resultArray.push(left.shift());
  }
  while (right.length) {
    resultArray.push(right.shift());
  } */
  //return resultArray;

  //return resultArray.concat(left,right);
  console.log("Concatanating happening")
  console.log(resultArray + left + right);
  return [...resultArray, ...left, ...right];
};

const arr = [4, 9, 5, 8, 6, 1, 7, 2, 0, 3];

console.log(mergeSort(arr));
