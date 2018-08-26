function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
    
    var doubleArray = function(num){
      return num*2;
    }
    
    var final = array.map(doubleArray)
    return final;
}

//or 

let double = 
   ((array) => array.map(x => x * 2 ))
   