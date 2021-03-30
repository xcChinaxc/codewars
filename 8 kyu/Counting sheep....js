/* Counting sheep... */

/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). For example, [true, true,  true,  false]. The correct answer would be 3.  */

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter(x => x === true).length
}