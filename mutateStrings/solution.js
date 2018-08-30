
//candice results.
function mutateMyStrings(stringOne, stringTwo) {
    let splitOne = stringOne.split('');
    let splitTwo = stringTwo.split('');
    let mutate = stringOne + '\n';
    for (let i = 0; i < splitOne.length; i++) {
      if (splitOne[i] != splitTwo[i]) {
        splitOne[i] = splitTwo[i];
        mutate = mutate.concat(`${splitOne.join('')}\n`);
      }
    }
    return mutate;
  }
  // one that I figured out
  function mutateMyStrings(stringOne, stringTwo){
    let strOne = stringOne.split('');
    let strTwo = stringTwo.split('');
    let newString ='';
    
    for(let i = 0; i < strOne.length; i++){
      if(strOne[i]!==strTwo[i]){ //checking to see if the index match
      newString = newString + strOne.join('') + '\n'; //\n is starting a new lin\
      strOne[i] = strTwo[i];
      }
    }
    newString = newString + stringTwo + '\n';
    return newString;
    }
