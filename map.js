// Map

// basic object only stores string as key
// map stores other data type as let

let a = new Map();
console.log(a);

let b = a.set("firstname", "sagar");
console.log(b);
console.log(a.set("lastname", "waghmare"));

let city = {
  name: "nagpur",
  state: "maharashtra",
  population: 40,
};
for (let property in city) {
  console.log(property, city[property]);
}

let city1 = new Map([
  ["name", "gevrai"],
  ["state", "maharashtra"],
  ["population", "3ol"],
  [1, "model"],
]);
console.log(city1);
console.log(city1.get(1));

console.log(city1.values());
console.log(city1.keys());
console.log(city1.entries());

let bank = [
  {
    name: "sbi",
    no_ofcustomers: 30,
    type: "saving",
    city: ["pune", "mumbai", "nagpur", "aurangabad", "gevrai"],
  },
  {
    name: "hdfc",
    no_ofcustomers: 25,
    type: ["saving", "current"],
    city: ["pune", "mumbai", "nagpur", "aurangabad"],
  },
  {
    name: "idfc",
    no_ofcustomers: 22,
    type: ["saving", "current"],
    city: ["pune", "mumbai", "aurangabad"],
  },
];
let info = bank.forEach(function (ele) {
  console.log(
    `${ele.name} is having ${ele.no_ofcustomers} and is present in ${ele.city} and known for ${ele.type} account`
  );
});
let info1 = bank
  .map(function (ele) {
    ele.roi = "r";
    return ele;
  })
  .reduce(function (acc, ele) {
    return acc + ele.no_ofcustomers / bank.length;
  }, 0);
console.log(bank);
