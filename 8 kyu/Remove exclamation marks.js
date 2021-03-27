/* Remove exclamation marks */

function removeExclamationMarks(s) {
    let re = /!/gi;
    return s.replace(re, '')  
  }