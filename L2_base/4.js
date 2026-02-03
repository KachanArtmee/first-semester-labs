function findMissing(list) {  
  let diff = list[1] - list[0];
  let diff2 = list[list.length - 1] - list[list.length - 2];
  
  if(Math.abs(diff) > Math.abs(diff2)) {
    diff = diff2;
  }
  
  for(let i = 1; i < list.length; ++i) {
    diff2 = list[i] - list[i-1];
    
    if(diff2 != diff) {
      return list[i - 1] + diff;
    }
  }
}