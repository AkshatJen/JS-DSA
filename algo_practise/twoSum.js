function twoNumberSumEasy(array, targetSum) {
  //array = [5,3,6,8,9,4]  => [6,4]

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

function twoNumberSumHash(array, targetSum) {
  // Write your code here.

  const obj = {};

  for (let x = 0; x < array.length; x++) {
    const match = targetSum - array[x];

    if (obj[match]) {
      return [match, array[x]];
    } else {
      obj[array[x]] = true;
    }
  }
  return [];
}

function twoNumberSumOptimized(arr, target) {
  // Write your code here.

  const sortedArr = arr.sort((x, y) => x - y);

  let pointerL = 0;
  let pointerR = arr.length - 1;

  while (pointerL < pointerR) {
    const sum = arr[pointerL] + arr[pointerR];

    if (sum === target) {
      return [arr[pointerL], arr[pointerR]];
    }

    if (arr[pointerL] + arr[pointerR] > target) {
      pointerR--;
    }

    if (arr[pointerL] + arr[pointerR] < target) {
      pointerL++;
    }
  }
  return [];
}


console.log(twoNumberSumOptimized([2,5,3,7,1,6,4] ,4));