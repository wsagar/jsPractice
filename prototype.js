function person(name, age, city, occupation) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.occupation = occupation;
}

let person1 = new person("sagar", 30, "gevrai", "pvt employee");
let person2 = new person("sachin", 28, "gevrai", "pvt employee");

console.log(person1);

console.log(person2);

person.prototype.surname = "waghmare";
console.log(person2);
