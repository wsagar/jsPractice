function cricketers(name, age, type, format) {
  (this.name = name),
    (this.age = age),
    (this.type = type),
    (this.format = format);
}
let cricketer1 = new cricketers("sachin", 43, "batsman", "test");
let cricketer2 = new cricketers("zahir", 39, "bowler", "oneaday");
let cricketer3 = new cricketers("ravindra", 33, "allrounder", "t_20");

console.log(cricketer1.name);
console.log(cricketer2.name);
console.log(cricketer3.name);

function student(name, age, std, sub) {
  (this.name = name), (this.age = age), (this.std = std), (this.sub = sub);
}
let student1 = new student("sagar", 18, 12, "science");
let student2 = new student("tarak", 20, 14, "business");

console.log(student1.sub);
console.log(student2.name);

function city(name, population, occupation, atmosphere) {
  (this.name = name),
    (this.population = population),
    (this.occupation = occupation);
  this.atmosphere = atmosphere;
}
let city1 = new city("gevrai", 50000, "farmer", "hot");
let city2 = new city("pune", 10000000, "IT", "cold");
let city3 = new city("mumbai", 2000000, "pvt employee", "warm");

console.log(city1.name + " " + city2.name + " " + city3.name);
console.table(city1.name + city1.population);

function test() {}

function cricketer(name, country, type) {
  this.name = name;
  this.country = country;
  this.type = type;
}
let cricketer4 = new cricketer("ms dhoni", "india", "finisher batsman");
let cricketer5 = new cricketer("ricky ponting", "astrulia", "batsman");
let cricketer6 = new cricketer("kane williamson", "newzealand", "batsman");

console.log(cricketer4.name + " " + cricketer5.name + " " + cricketer6.name);
console.log(cricketer4.type + " " + cricketer5.type + " " + cricketer6.type);
console.log(
  cricketer4.country + " " + cricketer5.country + " " + cricketer6.country
);
function fn6() {
  function employee(name, department, experience) {
    this.name = name;
    this.department = department;
    this.experience = experience;
  }

  let employee1 = new employee("sagar", "production", "6");
  let employee2 = new employee("pratik", "npd", "7");
  let employee3 = new employee("ajinkya", "qc", "5");
  console.log(
    employee1.name + " " + employee1.department + " " + employee1.experience
  );
  console.log(
    employee2.name + " " + employee2.department + " " + employee2.experience
  );
  console.log(
    employee3.name + " " + employee3.department + " " + employee3.experience
  );
}
fn6();
