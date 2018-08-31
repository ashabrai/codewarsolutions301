function capitalize(string, arr){
    let strArray = string.split('');
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < strArray.length)
        strArray[arr[i]] = strArray[arr[i]].toUpperCase();
    } 
    return strArray.join('');
  };