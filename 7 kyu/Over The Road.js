/* Over The Road

You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. 
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2. 
Given your house number address and length of street n, give the house number on the opposite side of the street.
*/

function overTheRoad(address, n){
    return (n * 2) - address + 1
}