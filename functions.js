function add(x, y) {
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
}
// console.log(add(3, 2));
let a = add(2, 2);
console.log(a);
let b = add(3, 6);
console.log(b);

// function without parameter and without return type

function sub() {
  console.log(2 + 2);
}
sub();

// function with paramert and with return type

function cal(a, b) {
  return a + b;
  return a - b;
}
console.log(cal(2, 3));

// function decleration

function Hello() {
  console.log("hi there");
}
Hello();

// function expression

let reminders = function (s, t) {
  return t % s;
};
console.log(reminders(2, 3));
console.log(reminders(10, 50));

let filter = function () {
  let a = [2, 3, 4, 5, 6, 7, 8, 10];
  let b = a.filter(function (ele) {
    return ele % 2 == 0;
  });
  console.log(b);
};
filter();

let total = function () {
  let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let d = c.reduce(function (acc, ele) {
    return acc + ele;
  }, 0);
  console.log(d);
};
total();

let info = function () {
  let obj = [
    {
      names: "sagar",
      age: 30,
      city: "pune",
    },
    {
      names: "pratik",
      age: 32,
      city: "pune",
    },
  ];
  let s = obj
    // .filter(function (ele) {
    //   return ele.age > 30;
    // })
    .map(function (ele) {
      ele.comp = "ACPL";
      return ele;
    });
  console.log(s);
};
info();

// arrow function

let calc = (x, y) => {
  return x + y - 2 + y / 2 + x + y - 4;
};
console.log(calc(30, 15));

let person = () => {
  person1 = [
    {
      firstname: "sagar",
      lastname: "waghmare",
      age: 30,
    },
    {
      firstname: "pratik",
      lastname: "hiware",
      age: 33,
    },
  ];
  for (let property in person1) {
    console.log(property, person1[property]);
  }
};
person();

// string as a parameter to function  and string as a return type

function welcome(x) {
  return x + " " + "welcome";
}
let z = welcome("sagar");
console.log(z);
console.log(welcome("rahul"));

function helloeveryone(name) {
  return name + " " + "helloeveryone";
}
console.log(helloeveryone("sagar,sachin,shubham"));

function division(a, b) {
  return a / b;
}
let div = function (a, b, fn) {
  fn = function (a, b) {
    return a / b;
  };
  let vn = fn(a, b);
  return vn;
};
console.log(div(100, 20));

function say() {
  return function bol() {
    console.log("hey");
  };
  let gh = bol();
  return gh;
}
let fh = say();
fh();
