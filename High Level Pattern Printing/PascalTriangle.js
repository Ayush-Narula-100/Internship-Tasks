function generatePascalsTriangle(rows) {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle[i][i] = 1;
  }

  for (let i = 0; i < rows; i++) {
    let rowStr = " ".repeat(rows - i - 1); 
    for (let j = 0; j <= i; j++) {
      rowStr += triangle[i][j] + " ";
    }
    console.log(rowStr);
  }
}

generatePascalsTriangle(5);

