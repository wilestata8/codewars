//Directions

/*  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/


//Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

//Answers
function duplicateEncode(word){
  let chars=[...word.toLowerCase()];
  let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
  let duplicateSet = new Set(duplicateList); 
  let uniqueDuplicateList = [...duplicateSet];
  //console.log(uniqueDuplicateList);
  let resultString = "";
  for (let i=0, n=chars.length; i < n; ++i ) {
    if(uniqueDuplicateList.includes(chars[i])) {
      resultString += ")";
    } else {
      resultString += "(";
    }
  }
  return resultString;
}
solution 2

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}