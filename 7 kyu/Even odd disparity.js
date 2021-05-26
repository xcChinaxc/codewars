/* Even odd disparity */

/* Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.  */

function solve(a){
    let even = a.filter( (x,i) => x%2===0 ).length,
        odd = a.filter( (x,i) => x%2===1 ).length
    return even - odd
};