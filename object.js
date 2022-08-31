// // Retrive,Update,add,delete

// // Retrive
// // can be done by dot notation and bracket[] notation

// let info = ["sagar", "waghmare", "working", 29];
// console.log(info[2]);

// info[2] = "wanted to switch to IT";
// console.log(info);
// console.log(info.pop());
// console.log(info);

// console.log(info.splice(1));

// console.log(info.shift);

// add---Splice(),Unshift(),Push
let student = ["rahul", "roy", 13, 7];
console.log(student.push("bright student"));
console.log(student);

console.log(student.splice(1, "hello"));
console.log(student);

let student1 = {
  firstname: "ajay",
  lastname: "arora",
  age: 18,
  class: 12,
  rollno: 02,
};

// Retrive
console.log(student1.firstname);
console.log(student1["age"]);
console.log(student1.class - 1);

// update
student1.firstname = "rahulya";
console.log(student1);

// add
student1.grade = "A++";
console.log(student1);
student1.type = "bright student";
console.log(student1);
student1.subject = "science";
console.log(student1);

// delete

delete student1.type;
console.log(student1);

let cars = ["BMW", "Audi", "suzuki", "Mercedez"];
for (let i = 0; i < cars.length; i++) {
  console.log(i);
  console.log(cars[i]);
  console.log(cars.sort());
}

let car1 = {
  brand: "BMW",
  Type: "SUV",
  model: 2020,
  prize: 2000000,
  car1info: function () {
    console.log(
      "brand name of car1 is" +
        car1.brand +
        "," +
        "type of car1 is " +
        car1.Type +
        "," +
        "model is of" +
        car1.model +
        "and prize is" +
        car1.prize
    );
  },
};
car1.car1info();

car1.average = 15;
console.log(car1);

delete car1.model;

car1.Type = "hatchback";
console.log(car1);

console.log(car1.brand);

var lib = {
  book_name: "pursuit of happiness",
  author: "chris gardner",
  readingstatus: "done",
  review1: function () {
    console.log(
      "author of" +
        lib.book_name +
        "is" +
        " " +
        lib.author +
        "and my reading is" +
        lib.readingstatus
    );
  },
};
lib.review1();

// Copmarison opearators--comparison operators compare to value and returns boolean value i.e either true or false
// equal to(==)
// not equal to(!=)
// greater than(>)
// lessthan(<)
// greaterthan or equal to(>=)
// lessyhan or equal to(<=)

// when use two comparsin operators then it check only value and when use three comparison operators then it checks value as well as typeof

// AND
// OR
// NOT

// AND--------------------
// TRUE && TRUE= TRUE
// TRUE && FALSE=FALSE
// FALSE && TRUE=FALSE
// FALSE && FALSE=FALSE

console.log(2 == 2);
console.log(2 !== "2");
console.log(2 == 2 && 2 < 3);
console.log(2 === "2" && 2 === 2);
console.log(10 % 2 === 0 && 20 % 2 === 1);

console.log(10 % 2 === 0 || 20 % 2 === 1);

console.log(3 > 4 || (5 >= 4 && 6 >= 7));

let city = {
  name: "gevrai",
  state: "maharashtra",
  population: 100000,
  occupation: ["farming", "shops", "dairy products"],

  cityinfo: function () {
    console.log(
      city.name +
        " " +
        "is located in state of" +
        city.state +
        " " +
        " having population of" +
        city.population +
        " " +
        "most of the occupation of people is" +
        city.occupation
    );
  },
};
city.cityinfo();

let employees = [
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

let ages = employees.filter(function (ele) {
  return ele.age > 25;
});
console.log(ages);

let gy = ages.forEach(function (ele) {
  console.log(ele.firstname + " " + ele.lastname);
});
employees.forEach(function (ele) {
  console.log(ele.firstname + ":" + ele.skills.length);
});
let yt = employees.filter(function (ele) {
  return ele.experience > 3 && ele.skills.includes("quality");
});
console.log(yt);

let gh = yt.filter(function (ele) {
  return ele.age >= 30;
});
console.log(gh);

let employeeswith5exp = employees.filter(function (ele) {
  return ele.experience > 5;
});

let rateEmployees = employeeswith5exp.map((ele) => {
  ele.grades = "A++";
  return ele;
});
console.log(employeeswith5exp);

employees.forEach(function (ele) {
  ele.skills.push("energetic");
});
console.log(employees);

let rtr = employees.reduce(function (acc, ele) {
  return acc + ele.experience;
}, 0);
console.log(rtr);
console.log(rtr / employees.length);

employees.forEach(function (ele) {
  if (ele.experience > 5) {
    console.log(ele.firstname + " " + " is valuable employee to company");
  } else {
    console.log(ele.firstname + " " + "needs to be get motivated");
  }
});

console.log(employeeswith5exp);
function fn0() {
  let city1 = {
    names: "gevrai",
    state: "maharashtra",
    population: 50000,
    distance: 250,
  };
  for (let property in city1) {
    console.log(property, city1[property]);
  }
}

let student3 = {
  firstname: "sagar",
  lastname: "waghmare",
  age: 29,
  skills: ["jawascript", "production", "html"],
};
for (let property in student3) {
  console.log(property, student3[property]);
}

let student4 = [
  {
    firstname: "sagar",
    lastname: "waghmare",
    age: 29,
    skills: ["jawascript", "production", "html"],
  },
  {
    firstname: "sachin",
    lastname: "waghmare",
    age: 29,
    skills: ["jawascript", "jawa", "react", "angular", "html"],
  },
];

student4
  .filter(function (ele) {
    return ele.skills.includes("production");
  })
  .forEach(function (ele) {
    console.log(ele.firstname);
  });

let states = [
  {
    name: "maharashtra",
    population: 11.42,
    capital: "mumbai",
    citys: ["mumbai", "pune", "aurangabad", "nagpur", "beed"],
    languages: ["marathi", "hindi", "kokani"],
    districts: 36,
  },
  {
    name: "goa",
    population: 0.18,
    capital: "panji",
    citys: ["panji", "mapso", "margo", "vasco de gama", "pondolim"],
    districts: 2,
    languages: ["marathi", "hindi", "goan"],
  },
  {
    name: "up",
    population: 20.42,
    capital: "lucknow",
    citys: ["lucknow", "kanpur", "alahabd", "prayagraj", "varanasi"],
    districts: 75,
    languages: ["hindi", "bhojpuri", "urdu"],
  },
];
states
  .filter(function (ele) {
    return ele.citys.includes("alahabd");
  })
  .forEach(function (ele) {
    console.log(ele.name);
  });

let hh = states.reduce(function (acc, ele) {
  return acc + ele.population;
}, 0);
console.log(hh);

let gn = hh / states.length;
console.log(gn);

console.table(hh);
fn0();
