let n = 9; // row or column count
// defining an empty string

for (let i = 0; i < n; i++) {
  // external loop
  let string = "";

  for (let j = 0; j < n; j++) {
    // internal loop
    string += "* ";
  }
  // newline after each row
  //string += "\n";
  console.log(string);
}
// printing the string

// let count = 1;
// for (let r = 0; r <= 5; r++) {
//   let s = " ";
//   for (let c = 0; c <= r; c++) {
//     s = s + " " + count;
//     count++;
//   }
//   document.write(s);
//   document.write("</br>");
// }

let count2 = 1;
for (let r = 0; r <= 5; r++) {
  let s1 = "";
  for (c = 0; c <= r; c++) {
    s1 = s1 + count2 + " ";
    count2++;
  }
  console.log(s1);
}

let count3 = 1;
for (let r = 0; r <= 5; r++) {
  let s3 = "";
  for (c = 0; c <= 5 - r; c++) {
    s3 = s3 + count3 + " ";
    count3++;
  }
  console.log(s3);
}

let count = "*";
for (let r = 0; r <= 5; r++) {
  s = "";
  for (let c = 0; c <= r; c++) {
    s = s + count;
  }
  console.log(s);
}

let count4 = "&";
for (let r = 0; r <= 5; r++) {
  s4 = "";
  for (let c = 0; c <= 5; c++) {
    s4 = s4 + count4 + " ";
  }
  console.log(s4);
}
