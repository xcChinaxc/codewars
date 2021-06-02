/* The Office VI - Sabbatical */

/* You need to approach your boss about going on sabatical. Her decision will be based on three parameters:

val=your value to the organisation
happiness=her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string s. */

function sabb(s, val, happiness){
  if( s.match(/[sabatical]/g) ) {
    return s.match(/[sabatical]/g).length + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
  }
  else {
    return val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
  }
}
