/* Highest and Lowest */

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

// P - string
// R - string with the max and min values
// E - highAndLow("1 2 3 4 5");  // return "5 1"
// P - string to array, math for min and max values, return min and max as string

function highAndLow(numbers){
    
    let max = Math.max(...numbers.split(" ")),
        min = Math.min(...numbers.split(" "))
    
    return `${max} ${min}`
  }