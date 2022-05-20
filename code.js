
//CodeWars Javascript Solutions



//Description

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


//Solution
function digitize(n) {
  const answer =[]
  const str = n.toString()

  for(item of str){
    answer.unshift(parseInt(item))
  }

  return answer
}


