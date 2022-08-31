function ashramSchool(res) {
  if (res >= 30) {
    console.log("APassed");
  } else {
    console.log("AFailed");
  }
  //30 passss
}

function newHighSchool(res) {
  //40 passs
  if (res >= 40) {
    console.log("NPassed");
  } else {
    console.log("NFailed");
  }
}

function sscResult(fn) {
  let result = 30;
  fn(result);
}

//sscResult(newHighSchool)

let array = [10, 20];

function divBy_5(value) {
  return value / 5;
}

let diviedArray = array.map(divBy_5); //divby_5(10,0,[10,20]) //divBy_5(20,1,[10,20]);
console.log(diviedArray);

//console.log(divBy_5(100))

// Change

let count1 = 1;
for (let r = 0; r < 5; r++) {
  let string1 = " ";
  for (c = 0; c <= 5 - r; c++) {
    string1 = string1 + " " + count1;
    count1++;
  }
  console.log(string1);
}

let count2 = 1;
for (let r = 0; r <= 5; r++) {
  let string1 = " ";
  for (c = 0; c <= 5; c++) {
    string1 = string1 + " " + count2;
    count2++;
  }
  console.log(string1);
}
