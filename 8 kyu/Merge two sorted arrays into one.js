/* Merge two sorted arrays into one */

function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort((a,b) => a - b);
  let i = 0;
  while(i < arr3.length){
    if(arr3.indexOf(i) !== -1){
      arr3 += arr3.splice(i, 1);
    }
    return arr3;
  }
}


  
  
  // for(let i=0; i < arr3.length; i++){
  //   {
  //     return mergedArr.push(i)
  //   }
  // }
