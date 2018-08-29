
function high(x){
    let alphabet = [‘’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘i’, ‘j’, ‘k’, ‘l’, ‘m’, ‘n’, ‘o’, ‘p’, ‘q’, ‘r’, ‘s’, ‘t’, ‘u’, ‘v’, ‘w’, ‘x’, ‘y’, ‘z’]
    let test = x.split(' ’);
    let currentScore = 0;
    let highScore = 0;
    let highest = “”;
    for (let i = 0; i < test.length; i ++) {
      for (let j = 0; j < test[i].length; j++) {
        for (let k = 0; k < alphabet.length; k++) {
          if (test[i][j] === alphabet[k]) {
          currentScore += k;
          }
        }
      }
      if (currentScore > highScore) {
      highScore = currentScore;
      highest = test[i];
      currentScore = 0;
      } else {
      currentScore = 0;
      }
    }
    return highest;
   }
 
//another example

// function high(x){
//     let result = "";
//     let max = 0;
//     let alphabet = "abcdefghijklmnopqrstuvwxyz"
//     let arr = x.split(" "); //spliting the words into an array.
//     arr.forEach((item,index)=>{
//       let i = 0;
//       let count = 0;
//       while(i < item.length){
//         count = count + alphabet.indexOf(item[i]);
//         i++;
//       }
//       if(count > max){
//         result = item;
//         max = count;
//       }
//     });
//     return result;
//   }
/// another example of how to solve it. 
//   function high(x) {
    // Split the words to an array
    // let words = x.split(" ");
    // let highestScoringWord = "";
    // let highestScore = 0;
  
    // For each word..
    // words.map(function(word) {
      // Get the score of each word
    //   let score = wordScore(word);
      // If the score is beaten by points, copy value of points to score. Use current word as highest scoring word.
//       if (score > highestScore) {
//         highestScore = score;
//         highestScoringWord = word;
//       }
//     });
  
//     return highestScoringWord;
//   }
  
//   function wordScore(word) {
//     const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//     let score = 0;
//     word.split("").map(function(letter) {
//       // Get the score of each letter and total them as points
//       score += alphabet.indexOf(letter.toUpperCase()) + 1;
//     });
//     return score;
//   }