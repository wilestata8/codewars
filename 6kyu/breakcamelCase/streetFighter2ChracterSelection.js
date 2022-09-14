//Directions
Short Intro

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

UPDATE: a new kata's harder version is available here.

The Kata

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Screen:



//Answers
function streetFighterSelection(fighters, position, moves){
  let hoveredCharacters = [];
  let currentPosition = position;
  for (let move of moves){

    if (move == 'up'){
      if(currentPosition[0] == 0){
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else{
        currentPosition[0]--;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    
    if (move == 'down'){
      if(currentPosition[0] == 1){
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else{
        currentPosition[0]++;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    
    if (move == 'left'){
      if(currentPosition[1] == 0){
        currentPosition[1] = 5;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else{
        currentPosition[1]--;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    
    if (move == 'right'){
      if(currentPosition[1] == 5){
        currentPosition[1] = 0;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else{
        currentPosition[1]++;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    
  }
  
  return hoveredCharacters;
}