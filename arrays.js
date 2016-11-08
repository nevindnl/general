function primes(n){
  // boolean array
  const result = [];
  for (let i = 0; i < n; i++){
    i < 2 ? result.push(false) : result.push(true);
  }

  function sieve(prime){
    // sieve from prime ** 2, since k * prime eliminated for k < prime
    for(let i = Math.pow(prime, 2); i < n; i += prime){
      result[i] = false;
    }
  }

  for (let i = 0; i < n; i++){
    if(result[i]) sieve(i);
  }

  return result.map((el, i) => (
    el ? i : el
  )).filter(el => (
    el
  ));
}


function sample(arr, n){
  // symmetry
  // randomness

  // swap to the side
  const result = arr.slice();

  for(let i = 0; i < n; i++){
    let random = Math.floor(Math.random() * (result.length - i));
    [result[i], result[random]] = [result[random], result[i]];
  }

  return result.slice(0, n);

  // space: result: replace array (n) with indices hash (k, since k swaps)
}

// induction
// randomness
// streaming sample, sample(n)


function permute(arr, permutation){
  // cyclic swaps
  for (let i = 0; i < arr.length; i++){
    while (permutation[i] !== i){
      const swapIndex = permutation[i];

      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      [permutation[i], permutation[swapIndex]] = [permutation[swapIndex], permutation[i]];
    }
  }
}

// cyclic swaps
// 2D rotate


// multiple passes
function maxSubarrayDifference(arr){
  let reverse = arr.slice().reverse();

  let minCb = (a, b) => a < b;
  let maxCb = (a, b) => a > b;

  let minBefore = maxDifference(arr, minCb);
  let minAfter = maxDifference(reverse, minCb);
  let maxBefore = maxDifference(arr, maxCb);
  let maxAfter = maxDifference(reverse, maxCb);

  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(
      Math.max(
        Math.abs(maxAfter[i] - minBefore[i]),
        Math.abs(maxBefore[i] - minAfter[i])
      )
    );
  }

  return Math.max(...result);
}

function maxDifference(arr, cb){
  const result = [0];

  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    let next = current + arr[i];

    if (!cb(next, 0)) {
      current = 0;
      continue;
    }

    if (cb(next, current)) {
      current = next;
    }

    let last = result[result.length - 1];
    current < last ? result.push(current) : result.push(last);
  }
}

function checkArithmeticProgressions(arr, ranges){
  const endIndices = [];

  let start = 0;
  let end = 1;
  let diff = arr[end] - arr[start];

  for (;end < arr.length; end++) {
    if (arr[end + 1] - arr[end] !== diff) {
      for (let i = 0; i < end - start; i++) {
        endIndices.push(end);
      }

      start = end;
      diff = arr[start + 1] - arr[start];
    }
  }

  return ranges.map(range => {
    [start, end] = range;
    return end <= endIndices[start];
  });
}
