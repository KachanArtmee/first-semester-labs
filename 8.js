function expandedForm(num) {
  // Your code here
  let final = [];
  num = num.toString();
  
  for(let i = 0; i < num.length; ++i) {
    if(num[i] == 0) continue;
    
     final.push(num[i] *
          (10**(num.length - i -1)));
  }
  
  return final.join(" + ");
}