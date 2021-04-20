/* Lario and Muigi Pipe Problem */
/* Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
The pipes connecting your level's stages together need to be fixed before you receive any more complaints. 
Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.  */

function pipeFix(numbers){
  return Array.from( {length: numbers[numbers.length-1]-numbers[0] +1}, (_,i) => numbers[0] + i )
}