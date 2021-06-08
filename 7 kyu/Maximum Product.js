/* Maximum Product */

/* Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. */

function adjacentElementsProduct(array) {
    let max = []
    for(let i=0; i < array.length-1; i++){
      max.push(array[i] * array[i+1])
    }
    return Math.max(...max)
  }