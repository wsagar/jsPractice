let totalprize = 1500;
if (totalprize > 2000 && totalprize <= 5000) {
  console.log("10% discount");
}
if (totalprize > 5000 && totalprize <= 10000) {
  console.log("20% discount");
}
if (totalprize > 10000 && totalprize <= 20000) {
  console.log("30% discount");
} else {
  console.log("no discount");
}

//  falsy ---> 0 ,null ,undefined ,NaN ,'',false, 8 !== 8
// truthy---> 7 , 'a', '@sdf', "hello", -44 , true , 8 === 8

// switchcase

let player = "tiger";
switch (player) {
  case "sachin":
    console.log("cricket");

    break;
  case "ronaldo":
    console.log("football");

    break;
  case "federer":
    console.log("tenis");

    break;
  case "tiger":
    console.log("golf");

    break;
  case "ms":
    console.log("cricket");
    break;
  default:
    console.log("no game");
}

let a = 20;
let b = 100;

// if (a > b) {
//   console.log("a is greater");
// } else {
//   console.log("b is greater");
// }

a > b ? console.log("a is greater") : console.log("b is greater");

let names = "sagar";
names.includes("ar") ? console.log("fine") : console.log("not fine");

let f = 41;
let h = 51;
f % 2 == 0 || h % 2 == 0 ? console.log("even") : console.log("odd");

let date = 4;
switch (date) {
  case 1:
    console.log("today is monday");
    break;

  case 2:
    console.log("today is thuesday");
    break;
  case 3:
    console.log("today is wedensday");
    break;
  case 4:
    console.log("today is thursday");
    break;
  case 5:
    console.log("today is friday");
    break;
  case 6:
    console.log("today is saturday");
    break;
  case 7:
    console.log("today is sunday");
}

let balanceorder = 7;
switch (balanceorder) {
  case 0:
    console.log("dispatched");
    break;
  case 2:
    console.log("2 ITEMS NEED TO DISPATCH");
    break;
  case 5:
    console.log("5 items need to dispatched");
    break;
  default:
    console.log("whole order is pending");
}

let totalprize1 = 10000;
if (totalprize > 2000 && totalprize <= 5000) {
  console.log("10% discount");
} else if (totalprize > 5000 && totalprize <= 10000) {
  console.log("20% discount");
} else {
  console.log("30% discount");
}

function fn4() {
  let prize = 5100;
  if (prize > 5000 && prize <= 10000) {
    console.log("happy to give you 10% discount");
  } else if (prize > 10000 && prize <= 20000) {
    console.log("happy to give you 20% discount");
  } else if (prize > 20000 && prize <= 30000) {
    console.log("happy to give you 30% discount");
  } else {
    console.log("no discount");
  }
}
fn4();

let employee = "ajinkya";
switch (employee) {
  case "sagar":
    console.log("production");

    break;
  case "pratik":
    console.log("npd");
    break;

  case "ajinkya":
    console.log("qc");
    break;

  case "rushi":
    console.log("acc");
    break;

  default:
    console.log("no employee");
}

function av() {
  if (9 != 8) {
    console.log("hi");
  } else {
    console.log("hey");
  }
}
av();
