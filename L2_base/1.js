function hasTwoCubeSums(n) {
  const arrForAnswer = [];
  let countOfAnswers = 0;
    for(let a = 1; a ** 3 < n; ++ a) {
      for(let b = a + 1; b ** 3 < n; ++b) {
        let sum = a ** 3 + b **3;
        if(sum === n && countOfAnswers < 2)
          {
            arrForAnswer.push([a,b]);
            ++countOfAnswers;
          }
          if(countOfAnswers === 2){
            return true;
          }
      }
    }
  return false;
}