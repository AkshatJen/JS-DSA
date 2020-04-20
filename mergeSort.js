const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  const resultArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      resultArray.push(left.shift());
    } else {
      resultArray.push(right.shift());
    }
  }
  while (left.length) {
    resultArray.push(left.shift());
  }
  while (right.length) {
    resultArray.push(right.shift());
  }
  return resultArray;
};

const arr = [4, 5, 6, 1, 2, 3];

console.log(mergeSort(arr));
