function validateUsr(username) {
    let res =  /^[a-z\d_]{4,16}$/.test(username); //regex here/.test(username) 
    return res
  }
  