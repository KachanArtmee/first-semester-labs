function howManyTimes(time1, time2) {
  let y1 = parseInt(time1.slice(0, 4));
  let mo1 = parseInt(time1.slice(5, 7));
  let d1 = parseInt(time1.slice(8, 10));
  let h1 = parseInt(time1.slice(11, 13));
  let mi1 = parseInt(time1.slice(14, 16));
  let s1 = parseInt(time1.slice(17, 19));

  let y2 = parseInt(time2.slice(0, 4));
  let mo2 = parseInt(time2.slice(5, 7));
  let d2 = parseInt(time2.slice(8, 10));
  let h2 = parseInt(time2.slice(11, 13));
  let mi2 = parseInt(time2.slice(14, 16));
  let s2 = parseInt(time2.slice(17, 19));

  function isBefore() {
    if (y1 !== y2) return y1 < y2;
    if (mo1 !== mo2) return mo1 < mo2;
    if (d1 !== d2) return d1 < d2;
    if (h1 !== h2) return h1 < h2;
    if (mi1 !== mi2) return mi1 < mi2;
    return s1 < s2;
  }

  let count = 0;
  let ringStart = -1;
  let ringLength = 0;

  while (isBefore()) {
    if (mi1 === 0 && s1 === 0) {
      let hour = h1 % 12;
      ringLength = (hour === 0) ? 12 : hour;
      ringStart = 0;
    }
    if (mi1 === 30 && s1 === 0) {
      ringLength = 1;
      ringStart = 0;
    }

    if (ringStart >= 0 && ringStart < ringLength) {
      count += 1;
      ringStart += 1;
    }

    s1++;
    if (s1 === 60) {
      s1 = 0;
      mi1++;
    }
    if (mi1 === 60) {
      mi1 = 0;
      h1++;
    }
    if (h1 === 24) {
      h1 = 0;
      d1++;
    }
    if (d1 > 31) {
      d1 = 1;
      mo1++;
    }
    if (mo1 > 12) {
      mo1 = 1;
      y1++;
    }
  }

  return count;
}