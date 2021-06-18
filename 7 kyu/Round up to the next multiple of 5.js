/* 
Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
 */

function roundToNext5(n){
    switch (n % 5) {
        case -4: 
            return n + 4;
            break;
        case -3: 
            return n + 3;
            break;
        case -2: 
            return n + 2;
            break;
        case -1: 
            return n + 1;
            break;
        case 0: 
            return n;
            break;
        case 1: 
            return n + 4;
            break;
        case 2: 
            return n + 3;
            break;
        case 3: 
            return n + 2;
            break;
        case 4: 
            return n + 1;
            break;
    }
}