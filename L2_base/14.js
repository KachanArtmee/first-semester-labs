function isCircleSorted( arr ){
  let breaks = 0;
  
  for (let i = 0; i < arr.length; i++) {
  let next = (i == arr.length - 1) ? arr[0] : arr[i + 1];
    
  if (arr[i] > next) {
    breaks++;
    if(breaks > 1) return false;
    }
}
  return true;
}