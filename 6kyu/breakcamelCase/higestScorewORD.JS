//Directions
/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.*/


//Answers
  // 1. split x by ' ' to an array.
  // 2. calculate each word score to another array.
  // 3. get the highest score and index
  // 4. return the string of the highest score index of wordList
  const wordList = x.split(' ');
  
  
  const getScore = (word) => {
    return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
  }
  const scoreList = wordList.map(word => getScore(word));

 
  let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
  
 
  return wordList[highestIndex];