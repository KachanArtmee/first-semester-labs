function wave(str){
  // Code here
  let sstr = "";
  const final = [];
  for(let i = 0; i < str.length; ++i) { 
    if(str[i] == ' ') continue;
    
    sstr =str.slice(0, i) + str[i].toUpperCase() 
      + str.slice(i + 1);
    
    final.push(sstr);
  }
  return final;
}