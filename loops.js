// for(initialization;condition;steps){
//   //instruction
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while(condtion){
//   //instruction
// }

let array = [4, 2, 6, 8, 10, 11, 12, 15, 18];
let isOdd = false;
let oddNumber;
let i = 0;
while (isOdd !== true) {
  //9

  isOdd = array[i] % 2 !== 0;
  oddNumber = array[i];
  if (!isOdd) i = i + 1;
}
//console.log(oddNumber, i);

do {
  // console.log(i);
  i = i + 1;
} while (i < array.length);

function checkBulbStatus(choice) {
  switch (choice) {
    case "On":
      console.log("bulp is On");
      break;
    case "Off":
      console.log("bulp is Off");
      break;
    default:
      console.log("bulp is not working");
  }
}

function calculate(number1, number2, operation) {
  let a = 10,
    b = 20;
  switch (a + b) {
    case a + b:
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    default:
      return number1 / number2;
  }
}
let a = 40,
  b = 20;
if (a + b > 100) {
  console.log(">100");
} else if (a + b > 50) {
  console.log(">50");
} else if (a + b > 30) {
  console.log(">30");
} else {
  console.log(" <= 30");
}
//console.log(calculate(10, 20, 30));

// for (j = 0; j < arr.length; j++) {
//   if (arr[j] == 5) {
//     break;
//   }
// }
// console.log(j);

function greaternum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(greaternum(2, 4));

function smallernum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    num2;
  }
}
console.log(smallernum(10, 22));

function helloworld(lang) {
  if (lang == "marathi") {
    return "namaskar";
  } else if (lang == "hindi") {
    return "namaste";
  } else {
    return "hello";
  }
}
console.log(helloworld("marathi"));
console.log(helloworld("hindi"));
console.log(helloworld("hi"));

function assigngrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else {
    return "F";
  }
}
console.log(assigngrade(88));

let arr = [1, 2, 3, 4, 6, 7, 8, 9];
let j = 0;
while (arr[j] != 5 && j < arr.length) {
  j++;
  //console.log(j);
}
console.log(j);
