function multiolication(x, y) {
  console.log("hi");
  return x * y;
  console.log("bi");
}
console.log(multiolication(2, 2));

// here after the function call and function returns and get executed after that noting will be performs like in line no.4 this will not be executed

// so here comes the closures function in return
// like

function addition() {
  let a = 20;
  let b = 30;

  return function add() {
    console.log(a + b);
  };
  let ff = add();
  ff();
}
let fb = addition();
fb();

let person = {
  names: "sagar",
  age: 29,
  city: "pune",

  info: () => {
    console.log(this.names + " " + this.age + " " + this.city);

    info2 = () => {
      console.log(this.age + "is fine");
    };
  },
};
person.info();
// person.info2();

function division() {
  let x = 100;
  let y = 200;

  return function div() {
    console.log(x / y);
  };
  let gh = div();
  gh();
}
let gg = division();
gg();

function even() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return function eve() {
    let vb = a.filter(function (ele) {
      return ele % 2 == 0;
    });
    console.log(vb);
  };
  let gn = eve();
  gn();
}
let rh = even();
rh();

function bank(amount, type) {
  bal = 0;
  if (type == "deposit") {
    function deposit(amount) {
      bal = bal + amount;
    }
    deposit(amount);
  } else {
    function withdraw(amount) {
      if (bal > amount) {
        bal = bal - amount;
      }
    }
    withdraw(amount);
  }
  return bal;
}
let aa = bank(200, "deposit");
console.log(aa);
let dd = bank(300, "deposit");
console.log(dd);

function inventory(qty, type) {
  stock = 0;
  if (type == "purchase") {
    let purchase = function (qty) {
      stock = stock + qty;
    };
    purchase(qty);
  } else {
    let dispatch = function (qty) {
      if (stock > qty) {
        stock = stock - qty;
      }
    };
    dispatch(qty);
  }
  return stock;
}
let gn = inventory(22, "purchase");
console.log(gn);
gn = inventory(20, "purchase");
console.log(gn);
gn = inventory(10, "dispatch");
console.log(gn);
gn = inventory(2, "purchase");
console.log(gn);

let balance = 0;
function moneytransaction(amount, type) {
  let income = (amount) => (balance = balance + amount);
  let expenses = (amount) => {
    if (balance > amount) {
      balance = balance - amount;
    }
  };
  type == "income" ? income(amount) : expenses(amount);
  return balance;
}

let fo = moneytransaction(800, "income");
console.log(fo);
fo = moneytransaction(50, "expenses");
console.log(fo);
fo = moneytransaction(48, "expenses");
console.log(fo);

let totalshares = 0;
function demat(shares, transaction) {
  let stock = "tatamotors";
  let buy = (shares) => (totalshares = totalshares + shares);
  let sell = (shares) => {
    if (totalshares > shares) {
      totalshares = totalshares - shares;
    }
  };
  let devident = () => totalshares * 20;

  transaction == "buy" ? buy(shares) : sell(shares);
  return [stock, totalshares, devident];
}
let as = demat(20, "buy");
console.log(as[0]);
console.log(as[1]);
let ad = as[2];
let af = ad();
console.log(af);
as = demat(5, "sell");
console.log(as[1]);
let fg = as[2];
let hh = fg();
console.log(hh);
