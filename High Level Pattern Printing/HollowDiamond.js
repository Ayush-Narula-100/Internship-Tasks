function printHollowDiamond(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let line = " ".repeat(n - i); 

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let line = " ".repeat(n - i); 

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}


printHollowDiamond(5);
