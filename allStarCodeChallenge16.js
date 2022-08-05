//Directions
This Kata is intended as a small challenge for my students

All Star Code Challenge #16

Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.

//Examples:
noRepeat("aabbccdde") // => "e"
noRepeat("wxyz") // => "w"
noRepeat("testing") // => "e"


//Answers
function noRepeat(str) {  
  for(var i of str) if(str.split(i).length == 2) return i
}