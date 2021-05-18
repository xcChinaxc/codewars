/* Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer */

/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:
    - < firstName here >, < country here > of the first Python developer who has signed up; or
    - There will be no Python developers if no Python developer has signed up.
*/

function getFirstPython(list) {
    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
  }