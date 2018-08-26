function filter_list(l) {
    let result = l.filter(element => typeof(element)!=='string');
    return result;
  }