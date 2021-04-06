/* 8kyu interpreters: HQ9+ */

// Attempt 3 -
function HQ9(code) {
  switch(code){
    case 'H' : return "Hello World!";
    case 'Q' : return code;
    case '9' : {
      let song = '';
      for( let i=5; i >= 1 ; i--){
        let equal2 = `${i} bottles of beer on the wall, ${i} bottles of beer.\n` + `Take one down and pass it around, ${i - 1} bottles of beer on the wall.\n`;
        let equal1 = `${i} bottle of beer on the wall, ${i} bottle of beer.\n` + `Take one down and pass it around, no more bottles of beer on the wall.\n`+ `No more bottles of beer on the wall, no more bottles of beer.\n` + `Go to the store and buy some more, 99 bottles of beer.`;
        if(i>=2){ song += equal2 } 
        else{ song += equal1 }
      }
      return song
    }
    default : return undefined;
  }
}

// // Attempt 2 - fixed 0 to show as no more. undefined still showing.
// function HQ9(code) {
//   switch(code){
//     case 'H' : return "Hello World!";
//     case 'Q' : return code;
//     case '9' : {
//       for( let i=5; i >= 1 ; i--){
//         let equal2 = `${i} bottles of beer on the wall, ${i} bottles of beer. \nTake one down and pass it around, ${i-1} bottles of beer on the wall.`;
//         let equal1 = `${i} bottle of beer on the wall, ${i} bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer, \nGo to the store and buy some more, 99 bottles of beer.`;
//         console.log( (i>=2) ? equal2 : equal1);
//       }
//     }
//     default : return undefined;
//   }
// }

// Attempt 0
// cannot get "0 bottles of beer on the wall" to show as "No more bottles of beer on the wall" && undefined

// function HQ9(code) {
//   switch(code){
//     case 'H' : return "Hello World!";
//     case 'Q' : return code;
//     case '9' : {
//       for( let i= 4; i > -1 ; i--) {
//         let above2 = `${i} bottles of beer on the wall, ${i} bottles of beer. \nTake one down and pass it around, ${i-1} bottles of beer on the wall.`;
//         let equal1 = `${i} bottle of beer on the wall, ${i} bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.`;
//         let nomore = `No more bottles of beer on the wall, no more bottles of beer, \nGo to the store and buy some more, 99 bottles of beer.`;
//         console.log( (i>=1) ? above2 : nomore);
//       }};
//     default : return undefined;
//   } 
// }