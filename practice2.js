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

// for (let i = 2; i <= 6; i + 2) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
}
