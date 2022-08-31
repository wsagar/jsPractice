// object leterals

let person = {
  firstname: "sagar",
  lastname: "waghmare",
  age: 29,
  city: "pune",
};

let person1 = {
  firstname: "pratik",
  lastname: "hiware",
  age: 32,
  city: "pune",
};

// when we have to describe more than one object we have to create/write code for those objects
// so here we can use constructor function for creating more than one objects with minimun code

// setting the value outside the class

class person2 {
  firstname = undefined;
  lastname = undefined;
  age = undefined;
  city = undefined;
  skills = [];
}
console.log(person2);
let sagar = new person2();
console.log(person2);
sagar.firstname = "sagar";
sagar.lastname = "waghmare";
sagar.age = 29;
sagar.skills.push("js");
console.log(sagar);

// setting the object properties at the time of object creation

class city {
  constructor(name, state, population, language) {
    this.name = name;
    this.state = state;
    this.population = population;
    this.language = language;
  }
}

let gevrai = new city("gevrai", "maharashtra", 20, "marathi");
console.log(gevrai);
let pune = new city("pune", "maharashtra", 200, [
  "marathi",
  "hindi",
  "english",
]);
console.log(pune);

class company {
  constructor(name, origin, product) {
    this.name = name;
    this.origin = origin;
    this.product = product;
  }
}
let ashra = new company("ashra", "manufacturing", "filter");
console.log(ashra);

class movie {
  constructor(name, actor, actress, type, language) {
    this.name = name;
    this.actor = actor;
    this.type = type;
    this.language = language;
  }
}
let barfi = new movie("barfi", "rk", "dp", "romantic", ["hindi", "english"]);
console.log(barfi);
barfi.collection = 200;
console.log(barfi);

class clinic {
  setname(name) {
    this.name = name;
  }
  settype(type) {
    this.type = type;
  }
  setcity(city) {
    this.city = city;
  }
  setnoof_patient(noof_patient) {
    this.noof_patient = noof_patient;
  }
}
let drgondhane = new clinic();
drgondhane.setname("drgondhane");
drgondhane.settype("skincare");
drgondhane.setnoof_patient(20);
drgondhane.setcity(["pune", "buldhana"]);

console.log(drgondhane);

class school {
  setname(name) {
    this.name = name;
  }
  setclass(std) {
    this.std = std;
  }
  setcity(city) {
    this.city = city;
  }
}
let nhs = new school();
nhs.setname("NHS");
nhs.setclass(10);
nhs.setcity("gevrai");
console.log(nhs);
