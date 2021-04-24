/* Numbers to Letters */

/* Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively. All inputs will be valid. */

// P - array of numbers
// R - string
// E - switcher(['4', '24']), 'wc'
// P - make alphabet variable, map original numbers to characters in variable, join together, return string

function switcher(x){
    const alphabet = '.zyxwvutsrqponmlkjihgfedcba!? '
    return x.map( num => alphabet[num] ).join('')
}
