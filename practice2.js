let cities = ["pune", "nagpur", "mumbai", "hydrabad"];
console.log(cities);
let n1 = cities.push("raiapur");
console.log(n1);
console.log(cities);

// let numbers = [2, 3, 4, 5];
// // let nnn = [];
// let num = numbers.push(function addno(num1) {
//   if (num1 > 0) {
//     return 6;
//   } else {
//     0;
//   }
// });
// console.log(num);
// console.log(numbers);

// let numbers3 = [2, 3, 4, 5];
// let bn = numbers3.pop();
// console.log(bn);
// console.log(numbers3);

// let namess = ["sagar", "sachin", "shubham"];
// let fullnames = namess.forEach(function (ele) {
//   console.log(ele + " " + "somnath waghmare");
// });

// let nv = [1, 2, 3, 4, 5, 6, 7];
// let gn = nv.find(function (ele) {
//   return ele > 2;
// });
// console.log(gn);

// let re = [1, 2, 3, 4, 5, 6, 7];
// let fb = re.findIndex(function (ele) {
//   return ele > 2;
// });
// console.log(fb);
// // console.log(re);
// console.log(is_string("re"));
// let aa = "sagar";
// console.log(is_string("sagar"));
const is_string = (str) => typeof str === "string";
console.log(is_string([123]));

let x = "5" + 2 + 3;
console.log(x);

let x1 = 2 + 3 + "5";
console.log(x1);

// const d = new Date(date, string);
// console.log(d);

// const d1 = new Date(2022);
// console.log(d1);

// const d = new Date();
// d.toUTCString();

let num1 = [22, 44, -36, 64, -80, 50, 33];
let num2 = num1.map(function (ele) {
  return ele / 2;
});
console.log(num2);
let num3 = num2.filter(function (ele) {
  return ele > 0;
});
console.log(num3);
let num4 = num3.reduce(function (acc, ele) {
  return acc + ele;
}, 0);
console.log(num4);

let year = [22, 40, 60, 33];
let birthyears = [];
for (let i = 0; i < year.length; i++) {
  //   console.log(2022 - year[i]);
  let bb = 2022 - year[i];
  let bh = birthyears.push(bb);
}
console.log(birthyears);

birthyears6 = [1992, 1994, 1996];
let ages3 = [];
for (let i = 0; i < birthyears6.length; i++) {
  let go = 2022 - birthyears6[i];
  let get = ages3.push(go);
}
console.log(ages3);

let ticketnum = [11, 30, 50];
ticketnum.forEach(function (ele) {
  console.log(ele + "valid for a hour");
});

let sbjects = ["hindi", "marathi", "sanskrit"];
sbjects.forEach(function (ele) {
  console.log(ele + " is primary school subject");
});
let sbjects1 = ["hindi", "marathi", "sanskrit"];
let jn = sbjects1.find(function (ele) {
  return ele.includes("thi");
});
console.log(jn);

let sbjects2 = ["hindi", "marathi", "sanskrit"];
let hn = sbjects2.findIndex(function (ele) {
  return ele.includes("krit");
});
console.log(hn);

let num_1 = [22, -40, 67, -59, 66];
let hg = num_1.every(function (ele) {
  return ele > 60;
});
console.log(hg);

let num_2 = [22, -40, 67, -59, 66];
let hk = num_1.some(function (ele) {
  return ele > 60;
});
console.log(hk);

let num_3 = [22, -40, 67, -59, 66];
let bb = num_2.slice(1, 3);
console.log(bb);
console.log(num_3);

let num_4 = [22, -40, 67, -59, 66];
let gg = num_4.splice(1, 3, "33");
console.log(gg);
console.log(num_4);

let num_5 = [22, -40, 67, -59, 66];
hh = num_5.fill("hi", 0);
console.log(hh);

let currency = "1000.000";
let gn = currency.split(".");
console.log(gn);

for (i = 0; i < 10; i++) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}

var i = 2;
for (var i = 0; i < 5; i++) {
  // console.log(i);
}

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

let names1 = {
  names: "sagar",
  lastname: "waghmare",
  age: 30,
};
for (let key in names1) {
  console.log(key, names1[key]);
}

let cricketers = {
  firstname: "sachin",
  lastname: "tendulkar",
  age: 42,
  country: "india",
};
for (key in cricketers) {
  console.log(key, cricketers[key]);
}

let employees1 = [
  {
    firstname: "sagar",
    lastname: "waghmare",
    age: 29,
    Department: "production",
    experience: 6,
    skills: ["prodction", "quality", "despatch", "MIS"],
  },
  {
    firstname: "ajinkya",
    lastname: "dhamale",
    age: 30,
    Department: "quality",
    experience: 4,
    skills: ["prodction", "quality", "inrpocess quality", "MIS"],
  },
  {
    firstname: "pratik",
    lastname: "hiware",
    age: 33,
    Department: "npd",
    experience: 7,
    skills: ["quality", "inrpocess quality", "MIS", "npd"],
  },
  {
    firstname: "shivram",
    lastname: "birajdar",
    age: 28,
    Department: "purchase",
    experience: 2,
    skills: ["prodction", "stores", "inventory", "MIS", "supplier followup"],
  },
  {
    firstname: "rushikesh",
    lastname: "purane",
    age: 32,
    Department: "accounts",
    experience: 4,
    skills: ["accounts", "tally", "loans", "paymenst"],
  },
];

// for (key in employees1) {
//   console.log(key, employees1[key]);
// }

let imp = employees1
  .filter(function (ele) {
    return ele.experience > 5;
  })
  .map(function (ele) {
    ele.grade = "A++";
    return ele;
  });
console.log(imp);

employees1.forEach(function (ele) {
  if (ele.skills.includes("quality")) {
    console.log(ele.firstname);
  }
});

employees1.forEach(function (ele) {
  if (ele.experience >= 7) {
    console.log(
      ele.firstname +
        "  is" +
        " valuable emlpyee to company" +
        " with" +
        ele.skills.length +
        "skills"
    );
  }
});

// console.log(
let avgexp = employees1.reduce(function (acc, ele) {
  return acc + ele.experience;
}, 0);
let ghh = avgexp / employees1.length;
console.log(ghh);

let numbers = [22, 5, 55, 43, 532, 567];
for (key in numbers) {
  console.log(key + ":" + numbers[key]);
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

let heros = "shahrukh";
switch (heros) {
  case "akshay":
    console.log("hera pheri");

    break;

  case "amir":
    console.log("3 idiots");

    break;

  case "ranbir":
    console.log("barfi");
    break;

  case "shahrukh":
    console.log("swades");
    break;

  default:
    console.log("no movie");
}

for (let i = 0; i <= 5; i++) {
  console.log("hello");
}

for (let i = 2; i <= 6; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

for (let i = 1; i <= 10; i = i + 1) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
function fn3() {
  let totalprize = 6000;
  if (totalprize > 2000 && totalprize <= 5000) {
    console.log("10% discount");
  } else if (totalprize > 5000 && totalprize <= 10000) {
    console.log("20% discount");
  } else if (totalprize > 10000 && totalprize <= 20000) {
    console.log("30% discount");
  } else {
    console.log("no discount");
  }
}

let arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 66, 77, 44, 55, 66];

let newUniquearr = [...new Set(arr)];
console.log(newUniquearr);

// let b = [2, 33, 2, 44, 5, 3, 5, 22, 33, 55, 44];
// let c = [];
// for (let i = 0; i < b.length; i++) {
//   if (c.indexOf(b[i]) === -1) {
//     c.push(b[i]);
//   }
// }
// console.log(c);

// input=2,21,16
// if input is >20 print hot

fn3();

// let i4 = 0;
// while (i4 <= 4) {
//   if (i4 == 2) {
//     i4++;
//     continue;
//   }
//   console.log(i4);
// }
//let arr=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10]
// let newarr = [...new set(arr)];
// console.log(newarr);

// let i2 = 0;

// while (i2 <= 5) {
//   if (i2 == 3) {
//     i2++;
//     continue;
//   }
//   //i2++;
//   console.log(i2);
//   i2++;
// }

function fn7() {
  let i = 2;
  while (i <= 10) {
    if (i == 6) {
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

function fn2() {
  let a = [2, 3, 5, 7, 8, 19];
  let aa = a
    .filter(function (ele) {
      return ele >= 5;
    })
    .map(function (ele) {
      return ele * 2;
    })
    .reduce(function (acc, ele) {
      return acc + ele;
    }, 0);
  console.log(aa);
}
fn2();

function fn1() {
  let d = ["mahesh", "nagare", 33, 30];
  let gg = d.map(function (ele, index) {
    return index;
  });
  console.log(gg);
}
fn1();

function fn4() {
  let balaji_coll = [
    {
      brand: "levis",
      type: "jeans",
      qtysold: 20,
      prizerange: "medium",
    },
    {
      brand: "CC",
      type: "t_shirts",
      qtysold: 22,
      prizerange: "medium",
    },
    {
      brand: "arrow",
      type: "shirts",
      qtysold: 15,
      prizerange: "high",
    },
    {
      brand: "local",
      type: "all",
      qtysold: 30,
      prizerange: "cheap",
    },
  ];
  balaji_coll.forEach(function (ele) {
    console.log(
      `balaji_collection sells
        ${ele.brand}
        in
        ${ele.type}
        whose prizerange is
        ${ele.prizerange}`
    );
  });
  let info = balaji_coll
    .filter(function (ele) {
      return ele.qtysold > 20;
    })
    .reduce(function (acc, ele) {
      return acc + ele.qtysold;
    }, 0);
  console.log(info);
  let bb = balaji_coll
    .filter(function (ele) {
      return ele.qtysold > 20;
    })
    .map(function (ele) {
      ele.goodtosell = "yes";
      return ele;
    });
  console.log(bb);
  for (let property in balaji_coll) {
    console.log(property, balaji_coll[property]);
  }
}
fn4();

// let i9 = 0;
// while (i9 <= 20) {
//   if (i9 == 6) {
//     i++;
//     continue;
//   }
//   if (i9 == 18) {
//     break;
//   }
//   console.log(i9);
//   i9++;
// }

fn7();

function fn6() {
  let i = 0;
  while (i <= 22) {
    if (i == 7) {
      i++;
      continue;
    }
    if (i == 18) {
      break;
    }
    console.log(i);
    i++;
  }
}
fn6();

function fn8() {
  let i = 0;
  while (i <= 22) {
    if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
      i++;
      continue;
    }
    if (i == 21) {
      break;
    }
    console.log(i);
    i++;
  }
}
//fn8();

function oddoreven(arr) {
  let odd = arr.filter(function (ele) {
    return ele % 2 !== 0;
  });

  let even = b.filter(function (ele) {
    return ele % 2 === 0;
  });

  return odd.length == 1 ? odd[0] : even[0];
}
//oddoreven();

let num = 8;
if (num > 7 && num == 9) {
  console.log("hi");
} else {
  console.log("bi");
}

// let a = 50;
// for (let i = 5; i <= a; i = i + 5) console.log(i);

let i5 = 10;
while (i5 <= 100) {
  console.log(i5);
  i5 = i5 + 10;
}

let i7 = 1;
do {
  console.log(i7);
  i7++;
} while (i7 <= 10);

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
console.log(add(50, 6000));

let a = [2, 3, 4, 5, 6, 7];
let cv = a.indexOf(a[4]);
console.log(cv);

let b = [2, 33, 2, 44, 5, 3, 5, 22, 33, 55, 44];
let c = [];
for (let i = 0; i < b.length; i++) {
  if (c.indexOf(b[i]) === -1) {
    c.push(b[i]);
  }
}
console.log(c);

let vb = [2, 33, 44, 55, 2, 5, 2, 3];
let blank = [];
for (let i = 0; i < vb.length; i++) {
  if (blank.indexOf(vb[i]) === -1) {
    blank.push(vb[i]);
  }
}
console.log(blank);

let v = ["sagar", "sachin", "shubham", "sagar"];
let cb = v.indexOf("shubjham");
console.log(cb);
