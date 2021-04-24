/* Remove String Spaces */

/* Simple, remove the spaces from the string, then return the resultant string. */

// P - string
// R - string
// E - noSpace('8aaaaa dddd r     '), '8aaaaaddddr'
// P - string > array > join

function noSpace(x){
    return x.split(' ').join('')
}