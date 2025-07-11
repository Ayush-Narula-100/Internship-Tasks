function printAlphabetHourglass(n) {
  // Upper half
  for (let i = 0; i < n; i++) {
    let line = " ".repeat(i);
    let chars = "";

    // Left side (A to ...)
    for (let j = 0; j < n - i; j++) {
      chars += String.fromCharCode(65 + j);
    }

    // Right side (... to A)
    for (let j = n - i - 2; j >= 0; j--) {
      chars += String.fromCharCode(65 + j);
    }

    console.log(line + chars);
  }

  // Lower half
  for (let i = n - 2; i >= 0; i--) {
    let line = " ".repeat(i);
    let chars = "";

    // Left side (A to ...)
    for (let j = 0; j < n - i; j++) {
      chars += String.fromCharCode(65 + j);
    }

    // Right side (... to A)
    for (let j = n - i - 2; j >= 0; j--) {
      chars += String.fromCharCode(65 + j);
    }

    console.log(" ".repeat(n - i - 1) + chars);
  }
}

printAlphabetHourglass(5);
