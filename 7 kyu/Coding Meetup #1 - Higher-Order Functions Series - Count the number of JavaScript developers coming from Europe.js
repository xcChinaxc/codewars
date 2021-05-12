/* Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe */

/* You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe. */

// P - array
// R - integer
// E - countDevelopers(list1), 1
// P - filter language and continent and get the length

function countDevelopers(list) {
    return list.filter( (lang) => lang.language === 'JavaScript' && lang.continent === 'Europe').length
}