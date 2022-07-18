/*Directions 
Task
In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output. In other words, for every x from the set of inputs there is exactly one element y from the set of outputs, such that the ordered pair (x, y) is contained in the set defining the function.

You are given a set of pairs that defines something. Your task is to figure out whether this something can be a function or not.


Example
For pairs = [[0.5,1.5],[2.5,3.5]], the output should be true.

For pairs = [[5,1],[2.5,3.4],[5,6],[7,2]], the output should be false.

The given set can't possibly define a function, since values y = 1 and y = 6 both correspond to the value x = 5. */


//Answer
function isFunction(pairs) {
  let f = {};
  for (let [x, y] of pairs) {
    if (x in f && f[x] !== y) return false;
    f[x] = y;
  }
  return true; 
}