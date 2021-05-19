/* Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages */

/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
*/

function countLanguages(list) {
  return list.reduce( (a,c) => {
    let key = c.language
    if(!a[key]){a[key] = []}
    a[key]++
    return a
  }, {})
}