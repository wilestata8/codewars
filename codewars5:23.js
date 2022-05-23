// **Directions**

  Your task is to sum the differences between consecutive pairs in the array in descending order.
  // example
  [2, 1, 10]  -->  9
  In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

// ** Solutions**

function sumOfDifferences(arr) {
  const sorted = arr.sort((a,b) => b - a )
  console.log(sorted);
  let sum = 0;
  
  for(let i = 1; i < sorted.length; i++){
    sum += sorted[i-1] - sorted[i];
    
  }
  return sum;
 
}


// Thoughts