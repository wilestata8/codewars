//Directions

/*  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

  Use conditionals to return the proper message:
*/

// Examples
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

// Answer
// name = owner say "hello boss"
// otherwise "Hello guest"
function greet (name, owner) {
  return name === owner ? 'Hello boss' :  'Hello guest';
}