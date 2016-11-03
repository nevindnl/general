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


function permute(arr, permutation){
  // cyclic swaps
  for (let i = 0; i < arr.length; i++){
    while (permutation[i] != i){
      const swapIndex = permutation[i];

      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      [permutation[i], permutation[swapIndex]] = [permutation[swapIndex], permutation[i]];
    //
  }
}

function sample(arr, n){
  // symmetry
  // swap to sequester
  for(let i = 0; i < n; i++){
    let random = Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }

  return arr.slice(0, n);
}
