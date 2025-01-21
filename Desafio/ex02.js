function processMatrix(matrix) {
  const sumRows = [];
  const sumCols = Array(matrix[0].length).fill(0);
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
      sumCols[j] += matrix[i][j];

      if (i === j) {
        diagonalPrincipal += matrix[i][j];
      }

      if (i + j === matrix.length - 1) {
        diagonalSecundaria += matrix[i][j];
      }
    }
    sumRows.push(rowSum);
  }

  return {
    sumRows,
    sumCols,
    diagonalPrincipal,
    diagonalSecundaria,
  };
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(processMatrix(matrix));
