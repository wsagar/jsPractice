let person1 = {
  f_name: "sagar",
  l_name: "waghmare",
  age: 29,
  city: "pune",

  info: function () {
    console.log(
      `${this.f_name} ${this.l_name} whose age is ${this.age} and leaves in ${this.city}`
    );
  },
};
person1.info();

let person2 = {
  f_name: "pratik",
  l_name: "hiware",
  age: 32,
  city: "pune",
};

person1.info.call(person2);

let state = {
  names: "maharshtra",
  language: "marathi",
  population: 11,
};

let info = function (government) {
  console.log(
    `in ${this.names} whose population is ${this.population} whose mothertounge is ${this.language} where government is of ${government}`
  );
};

info.call(state, "bjp");

let state2 = {
  names: "up",
  language: "hindi",
  population: 20,
};
info.call(state2, "bjp");

let person3 = {
  name: "sagar",
  lastname: "waghmare",
  age: 29,
  city: "pune",
};

let person4 = {
  name: "pratik",
  lastname: "hiware",
  age: 32,
  city: "pune",
};

let person5 = {
  name: "rahul",
  lastname: "gondhane",
  age: 30,
  city: "pune",
};

let person_info = function (bank) {
  console.log(
    `${this.name} whose age is ${this.age} lives in ${this.city} with bank account in ${bank}`
  );
};

person_info.call(person4, "hdfc");
person_info.call(person5, "sbi");
