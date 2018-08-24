function solution(str){
    return str.split("").reverse().join("");
    
  };

//the longer version todo 

function solution(str){
    //This is setting the varible newString to be an empty string
    var newString = "";

    //within this for loop we are cycling through string but in the reverse
    for (var i = str.length - 1; i >= 0; i --){
      newString = newString + str[i];
    }

    // we are returning the new string
    return newString;
  };