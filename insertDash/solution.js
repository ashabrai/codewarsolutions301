function insertDash(num) {
    let numArray = String(num).split('');
    
    for ( let i = 0; i < numArray.length; i++){
        if (numArray[i] % 2 !== 0 && numArray[i+1] % 2 !== 0){
        numArray.splice(i + 1, 0, '-')
        i++
   }
      if(numArray[numArray.length -1] === '-'){
      numArray.pop();
      }
      }
        return numArray.join('');
        }