// overwrite
  // forwards: delete
  // backwards: add

function isRotation(s1, s2){
  // counters
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++){
    for (let j = 0; j < s2.length; j++){
      if (s1[(i + j) % s1.length] !== s2[j]) break;

      if (j === s2.length - 1) return true;
    }
  }

  return false;
}


// KMP algorithm
function includes(s1, s2){
  if (s2.length > s1.length) return false;

  const nextStates = prefixLengths(s2);

  let matchLength = 0;

  for (let i = 0; i < s1.length; i++){
    while (s1[i] !== s2[matchLength] && matchLength > 0){
      matchLength = nextStates[matchLength - 1];
    }

    if (s1[i] === s2[matchLength]) matchLength++;
    if (matchLength === s2.length) return true;
  }

  return false;
}

function prefixLengths(s){
  const result = [];

  for(let i = 0; i < s.length; i++){
  	let current = result[result.length - 1];

    if (s[i] === s[current]){
      result.push(current + 1);
    } else {
      result.push(0);
    }
  }

  return result;
}
