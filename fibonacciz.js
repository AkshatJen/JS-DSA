//recursive
const fibonacciRecursive = fibIndex => {
  if (fibIndex < 3) return 1;
  else {
    return fibonacciRecursive(fibIndex - 1) + fibonacciRecursive(fibIndex - 2);
  }
};

// iterative

const fibonacciIterative = fibIndex => {
  let fibSeq = [0, 1, 1];
  if (fibIndex < 3) return 1;
  else {
    for (let i = 2; i < fibIndex; i++) {
      fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }
    return fibSeq[fibIndex];
  }
};

//memoized
const fibonacciMemoized = (fibIndex, cache = [0, 1, 1]) => {
  if (cache[fibIndex]) return cache[fibIndex];

  return (
    fibonacciMemoized(fibIndex - 1, cache) +
    fibonacciMemoized(fibIndex - 2, cache)
  );
};
const fibIndex = 10;

const fibNumber = fibonacciMemoized(fibIndex - 1);

console.log(fibNumber);
