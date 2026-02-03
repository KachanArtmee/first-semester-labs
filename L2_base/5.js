function primeFactors(n){
    let result = "";
    for(let i = 2;  n > 1 ; ++i) {
      if(n % i == 0) {
        let power = 0;
        while(n % i == 0) {
          n /= i;
          ++power;
        }
        result += power === 1 ? `(${i})` : `(${i}**${power})`;
      }
    }
            return result;
}