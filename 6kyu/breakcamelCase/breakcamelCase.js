// QUESTION
Complete the solution so that the function will break up camel casing, using a space between words.

// EXAMPLE
solution("camelCasing")  ==  "camel Casing"

//SOLUTION
// data types : strings
// function will "break up camel casing"
// camel casing is two words
// fuction breaks of two words (capital)
//reglex
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
   
}
