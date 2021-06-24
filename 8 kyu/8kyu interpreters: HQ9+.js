/* 8kyu interpreters: HQ9+

You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

    If the input is 'H', return 'Hello World!'
    If the input is 'Q', return the input
    If the input is '9', return the full lyrics of 99 Bottles of Beer. 
    For everything else, don't return anything (return null in C#, None in Rust).
    
*/

function HQ9(word){
  let song = ""
  if(word == 'H'){
    return "Hello World!"
  }
  if(word == 'Q'){
    return "Q"
  }
  if(word == '9'){
    for(let i=99; i>2; i--){
      song += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
    }
    song += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
    song += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
    song += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    return song
  }
  else {
    return undefined
  }
}