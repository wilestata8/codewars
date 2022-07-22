//Directions
/*Complete the solution so that it reverses the string passed into it.*/

//Examples:

'world'  =>  'dlrow'
'word'   =>  'drow'


// Answer
function solution(str){
  return str.split('').reverse().join('');  
}