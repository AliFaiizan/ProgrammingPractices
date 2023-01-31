

const sumofNaturalNumbers = (nubmer) => {
  filteredNumbers = [];
  for (let i = 0; i < nubmer; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      filteredNumbers.push(i);
    }
  }
  const totalSum = filteredNumbers.reduce((i, j) => {
    return i + j;
  });

  return totalSum;
};
