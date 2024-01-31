let person = {
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
person.info();

// let school = {
//   names: "new high school",
//   class: "1 to 10",
//   no_ofstudents: 1000,
//   city: "gevrai",

//   info1: function () {
//     console.log(
//       `${this.names} is a school loctaed in ${this.city} whose capacity is ${this.no_ofstudents} students with classes from ${this.class}`
//     );
//     let info2 = function () {
//       console.log(
//         `${this.names} whose students capacity is ${this.no_ofstudents}`
//       );
//     };
//     info2();
//   },
// };

// school.info1();
// school.info2();

// var names = "new india school";
// var no_ofstudents = 2000;

// let school = {
//   names: "new high school",
//   class: "1 to 10",
//   no_ofstudents: 1000,
//   city: "gevrai",

//   info1: function () {
//     console.log(
//       `${this.names} is a school loctaed in ${this.city} whose capacity is ${this.no_ofstudents} students with classes from ${this.class}`
//     );
//     let info2 = function () {
//       console.log(
//         `${this.names} whose students capacity is ${this.no_ofstudents}`
//       );
//     };
//     info2();
//   },
// };

// school.info1();

var names = "new india school";
var no_ofstudents = 2000;

let school = {
  names: "new high school",
  class: "1 to 10",
  no_ofstudents: 1000,
  city: "gevrai",

  info1: function () {
    console.log(
      `${this.names} is a school loctaed in ${this.city} whose capacity is ${this.no_ofstudents} students with classes from ${this.class}`
    );
    let info2 = () => {
      console.log(
        `${this.names} whose students capacity is ${this.no_ofstudents}`
      );
    };
    info2();
  },
};

school.info1();

let state = {
  names: "maharshtra",
  language: "marathi",
  population: 11,

  info: function () {
    console.log(
      `in ${this.names} whose population is ${this.population} whose mothertounge is ${this.language}`
    );
  },
};
state.info();

let state2 = {
  names: "up",
  language: "hindi",
  population: 20,
};
let fn1 = state.info;
fn2 = fn1.bind(state2);
fn2();

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
let fn3 = person1.info;
fn4 = fn3.bind(person2);
fn4();

let car1 = {
  brand: "audi",
  type: "hatchback",
  drive: "automatic",
  prize: 2000000,
};


  veh_info=function () {
    console.log(
      `${this.brand} comes in the type of ${this.type} with ${this.drive} having prize worth rs ${this.prize}`
    );
  }

let x=10

let car2 = {
  brand: "mercidez",
  type: "sedan",
  drive: "automatic",
  prize: 1500000,
};

let sf=car1.veh_info



