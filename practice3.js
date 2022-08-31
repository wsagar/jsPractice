let totalprize = 13000;
if (totalprize >= 5000 && totalprize <= 7000) {
  console.log("10 percent discount");
} else if (totalprize >= 7000 && totalprize <= 9000) {
  console.log("20 precent discount");
} else if (totalprize >= 9000 && totalprize <= 12000) {
  console.log("30 percent discont");
} else if (totalprize >= 12001) {
  console.log("50 percent discount");
} else {
  console.log("no discount");
}

// switch case
let mla = "bkadu";
switch (mla) {
  case "fadanvis":
    console.log("bjp");
    break;
  case "dmunde":
    console.log("ncp");
    break;
  case "athakre":
    console.log("shivsena");
    break;
  case "rthakare":
    console.log("mns");
    break;
  default:
    console.log("noparty");
}

let score = 5000;
switch (score) {
  case 1000:
    console.log("beginer");
    break;
  case 5000:
    console.log("mediater");
    break;
  case 10000:
    console.log("master");
    break;
  default:
    console.log("no career");
}

let i = 0;
while (i <= 5) {
  console.log("hi");
  i++;
}

function fn() {
  let i = 0;
  while (i <= 10) {
    if (i == 3) {
      i++;
      continue;
    }
    if (i == 8) {
      break;
    }
    console.log(i);
    i++;
  }
}
fn();

function fn1() {
  let i = 1;
  while (i <= 10) {
    if (i == 3) {
      console.log("hi");
    }
    if (i == 8) {
      console.log("by");
    }
    console.log(i);
    i++;
  }
}
fn1();

function fn3() {
  let i = 1;
  while (i <= 10) {
    if (i == 1) {
      break;
    }
    console.log(i);
    i++;
  }
}
fn3();

function fn4() {
  let i = 1;
  do {
    console.log(i);
    if (i == 1) {
      break;
    }
    i++;
  } while (i <= 10);
}
fn4();

let fn5 = function () {
  let i = 2;
  while (i <= 20) {
    console.log(i);
    i = i + 2;
  }
};
fn5();

let fn6 = () => {
  let i = 1;
  while (i <= 20) {
    if (
      i == 1 ||
      i == 3 ||
      i == 5 ||
      i == 7 ||
      i == 9 ||
      i == 11 ||
      i == 13 ||
      i == 15 ||
      i == 17 ||
      i == 19
    ) {
      i++;
      continue;
    }
    console.log(i);
    i++;
  }
};
fn6();

let fn7 = () => {
  let date = "16 dec";
  switch (date) {
    case "15 august":
      console.log("independence day");
      break;

    case "26 jan":
      console.log("republic day");
      break;

    case "16 dec":
      console.log("my birthday");
      break;

    default:
      console.log("ordinary day");
  }
};
fn7();

let fn8 = () => {
  let gym = [
    {
      name: "sagar",
      timing: "7-8",
      bodytype: "average",
      progress: "slowely",
      diet: "regular",
      membership: 6,
      fees: 5000,
    },
    {
      name: "pratik",
      timing: "8-9",
      bodytype: "moderate",
      progress: "medium",
      diet: "regular",
      membership: 6,
      fees: 5000,
    },
    {
      name: "omkar",
      timing: "8-9",
      bodytype: "fat",
      progress: "slowely",
      diet: "suggested",
      membership: 12,
      fees: 7000,
    },
  ];
  gym;
  let hj = gym.forEach(function (ele) {
    console.log(
      `in vcpl fitness club there is members ${ele.name} whose membership is for ${ele.membership} months `
    );
  });
  let gn = gym
    .filter(function (ele) {
      return ele.membership >= 6;
    })
    .map(function (ele) {
      ele.payment = "paid";
      return ele;
    });
  console.log(gn);
};
fn8();

// write a program to convert fisrt letters of a string into capital letters

function des() {
  let a = [
    [22, 33, 44],
    ["a", "b", "c"],
    [
      { name: "sagar", lastname: "waghmare" },
      { name: "pratik", lastname: "hiware" },
    ],
  ];
  let [
    [a1, a2, a3],
    [b1, b2, b3],
    [{ name: c1, lastname: c2 }, { name: d1, lastname: d2 }],
  ] = a;
  console.log(d2);
}
des();

function clinic(name, type, no_ofpatiem) {
  this.name = name;
  this.type = type;
  this.no_ofpatiem = no_ofpatiem;
}
let gondhaneclinc = new clinic("gondhane", "skincare", 5);
let generalclinic = new clinic("general", "all", 10);
let aadharclinic = new clinic("aadhatr", "general", 22);

console.log(gondhaneclinc);

let names = "sagar pratik rahul";
let rename = names.split(" ");
console.log(rename);
function upp() {
  let required = [];
  for (const ele of rename) {
    let firstchar = ele.substring(0, 1);
    // console.log(firstchar);
    firstchar = firstchar.toUpperCase();
    // console.log(firstchar);
    let restchar = ele.substring(1);
    console.log(restchar);
    required.push(firstchar + restchar);
  }
  return required.join(" ");
}
console.log(upp(names));

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
let newarr = [...new Set(arr)];
console.log(newarr);

let arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
let uniq = [];
for (let i = 0; i < arr1.length; i++) {
  if (uniq.indexOf(arr1[i]) === -1) {
    uniq.push(arr1[i]);
  }
}
console.log(uniq);

function add() {
  let a = 10;
  letb = 20;
}

let sentence1 = "hey hellow warriors";

function spinWords(string) {
  let fb = sentence1.split(" ");
  console.log(fb);
  let jh = fb.filter(function (ele) {
    return ele.length > 5;
  });
  let nn = jh.reverse();
  console.log(nn);
  for (const ele of nn) {
    let firstele = ele.substring(0);
    return firstele;
  }
}
spinWords();

function squareDigits(num) {
  let strnum = String(num);
  let result = "";

  for (let i = 0; i < strnum.length; i++) {
    let squared = parseInt(strnum[i]) * parseInt(strnum[i]);
    result = result + String(squared);
  }
  return parseInt(result);
}
console.log(squareDigits(1234));
