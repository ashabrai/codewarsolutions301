
function capitalize(s){
    let arrEven ='';
    let arrOdd = '';
    
    for (let i = 0; i < s.length; i++){
    if(i % 2 ===0) {
      arrEven += s[i].toUpperCase();
      }
      else {
        arrEven += s[i];
      }
    }
    
    for (var i = 0; i < s.length; i++){
      if( i % 2 === 1){
      arrOdd += s[i].toUpperCase();
    }
      else {
      arrOdd += s[i];
      }
    }
    
    return [arrEven,arrOdd];
  };