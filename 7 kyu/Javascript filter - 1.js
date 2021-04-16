/* Javascript filter - 1 */
/* While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. 
So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".
 */

// Attempt Two
function searchNames( logins ){
  return logins.filter(x => x[0].endsWith('_'))
}

// // Attempt One
// function searchNames( logins ){
//   return logins.filter( word => word[0].search(/_/g) > -1 )
// }