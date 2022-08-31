function findOutlier(arr) {
  const numberOfOdds = arr.reduce(
    (acc, item) => acc + (item % 2 !== 0 ? 1 : 0),
    0
  );
  const numberOfEvens = arr.reduce(
    (acc, item) => acc + (item % 2 === 0 ? 1 : 0),
    0
  );

  console.log(numberOfOdds, numberOfEvens);
  if (numberOfOdds === 1) {
    let index = arr.findIndex((item) => item % 2 !== 0);
    return arr[index];
  }
  let index = arr.findIndex((item) => item % 2 === 0);
  return arr[index];
}
console.log(findOutlier([2, 6, 8, 10, 3]));
