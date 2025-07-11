function printCharacterPyramid(n) {
  for (let i = 0; i < n; i++) {
    let line = " ".repeat(n - i - 1); 

    
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(65 + j);
    }

    
    for (let j = i - 1; j >= 0; j--) {
      line += String.fromCharCode(65 + j);
    }

    console.log(line);
  }
}


printCharacterPyramid(5);
