let firstname = new String("sagar");
console.log(firstname);
console.log(typeof firstname);

let gg = firstname.toUpperCase();
console.log(gg);

hh = firstname.indexOf("G");
console.log(hh);
console.log(firstname.charAt(1));
console.log(firstname.charCodeAt(3));
console.log(firstname.includes("g"));
console.log(firstname.slice(1));
console.log(firstname.endsWith("r"));
console.log(firstname.match());
console.log(firstname.replace("a", "A"));
console.log(firstname.split(""));
let gj = console.log(firstname.toString());

let a = new Set();
console.log(a);
b = a.add("apple");
console.log(b);

let c = new Set("sagar");
console.log(c);

let d = new Set(["sagar", "pratik", "pratik", "ravindra"]);
console.log(d);
let e = d.has("pratik");
console.log(e);
let f = d.delete("pratik");
console.log(f);
console.log(d);

console.log(d.size);

console.log(d.clear());
console.log(d);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let ele in num) {
  console.log(ele);
}

let person = {
  firstname: "victor",
  lastname: "lee",
  age: 40,
  skills: ["cooking", "drawing", "painting", "writing"],
};
for (let property in person) {
  console.log(property, person[property]);
}
// .dot notation does not work inside loop
