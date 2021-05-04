/* Array plus array */

/* 'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

// P - array
// R - integer
// E - arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21)
// P - combine arrays and use the reduce function

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce( (a,c) => a+c )
}
