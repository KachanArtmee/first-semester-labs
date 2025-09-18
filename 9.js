function solution(str) {
  let final = [];

  let currentAndNext;
  for (let i = 0; i < str.length; i += 2) {
    let currentAndNext = str[i] + (str[i + 1] || '_');
    final.push(currentAndNext);
  }

  return final;
}