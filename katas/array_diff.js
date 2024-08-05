export function arrayDiff(a, b) {
  return a.filter((itema) => {
    return b.some((itemb) => {
      if (itema !== itemb) {
        return itema;
      }
    });
  });
}

arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2], [1]);
arrayDiff([1, 2, 2], [2]);
arrayDiff([1, 2, 2], []);
arrayDiff([], [1, 2]);
arrayDiff([1, 2, 3], [1, 2]);
