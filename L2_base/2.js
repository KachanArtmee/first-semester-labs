function ipv4Parser(ip, mask){
  //your code here
  const IP = ip.split(".");
  const MASK = mask.split(".");
  
  const net = [];
  const host = [];
  
  for(let i = 0; i < 4; ++i) {
    net.push(IP[i] & MASK[i]);
    host.push(IP[i] & (~MASK[i] & 255));
  }
  
  return [net.join("."), host.join(".")];
}