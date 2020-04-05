// this one is recursive way
const factorialRecursive = (index) => {
  if (index == 1) return 1;
  else {
    return index * factorialRecursive(index - 1);
  }
};

// iterative one
const factorialIterative = (iter) => {
  let fib = [1];

  for (let i = 0; i < iter; i++) {
    fib.push(fib[i] * (i + 1));
  }
  return fib[iter];
};
//console.log(factorialIterative(10));

const factorialMemoized = (iter, cache = [0, 1, 2, 6, 24, 120]) => {
  if (cache[iter]) return cache[iter];
  else {
    return factorialMemoized(iter - 1, cache) * iter;
  }
};
//console.log("-----  Memoized ------");
console.log(factorialMemoized(10));
