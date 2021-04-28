/* Digitize */

/* Given a non-negative integer, return an array / a list of the individual digits in order. */

// P - integer
// R - array
// E - digitize(123), [1,2,3]
// P - take the number, make it a string, make numbers again

function digitize(n) {
    return n.toString().split('').map(x => Number(x))
}