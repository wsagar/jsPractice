// var firstName = "shubham",
//   lastName = "waghmare";
// var obj = {
//   firstName: "sachin",
//   lastName: "waghmare",
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };
// console.log(obj.fullName());

// var obj2 = {
//   firstName: "sagar",
//   lastName: "waghmare",
// };

// console.log(obj.fullName());
//console.log(obj.fullName.apply(obj2));
// //fn1();
// function fn3() {
//   console.log("hi");
//   function fn2() {
//     console.log("print me inside fn2");
//   }
//   //   fn2();
//   // }
//   // fn3();
//   // let fn1 = () => {
//   //   console.log("print me in fn");
// }

// console.log(this);
var obj1 = {
  name: "sagar",
  lastname1: "waghmare",
  fullname2: function () {
    console.log(this.name + " " + this.lastname1);
  },
};
console.log(obj1.fullname2());

var person = {
  names: "sagar",
  age: 30,
  info: function () {
    console.log(this.names + " " + this.age);
  },
};
console.log(person.info());

var school = {
  names1: "new high scholl",
  class: "1 to 10",
  no_ofstudents: 300,
  info3: function () {
    console.log(this.names1 + " " + this.class + " " + this.no_ofstudents);
  },
};

school.info3();

function fn() {
  alert();
}

function save() {
  console.log(document.getElementById("textInput").value);
  console.log("Clicked");
}
