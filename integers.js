function reverse(n){
  let result = 0;
  while(n > 0){
    result *= 10;
    result += n % 10;
    n = parseInt(n / 10);
  }
  return result;
}

function rand(n){
  const binaryLength = Math.floor(Math.log2(n)) + 1;

  let result = 0;
  for (let i = 0; i < binaryLength; i++){
    result += Math.pow(2, i) * rand2();
  }

  result < n ? result : rand(n);
}

function rand2(){
  return Math.floor(Math.random() * 2);
}
