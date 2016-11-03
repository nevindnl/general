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
