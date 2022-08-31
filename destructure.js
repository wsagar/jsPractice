// Destructure

let fruits = ["mango", "papaya", "chikoo"];
let [a, b, c] = fruits;
console.log(b);

let numb = [
  [1, 2, 3, 4],
  [5, 6, 7],
  [8, 9],
];
let [[a1, a2, a3, a4], [b1, b2, b3], [c1, c2]] = numb;
console.log(b3);

let info = {
  firstname: "sagar",
  lastname: "waghmare",
  age: 29,
  city: "gevrai",
};
let { firstname: I1, lastname: I2, age: I3, city: I4 } = info;
console.log(I1);
console.log(I4);

let info2 = {
  parent: {
    father: "somnath",
    mother: "meena",
  },
};
let {
  parent: { father: f, mother: m },
} = info2;

console.log(f);

let info3 = {
  names: "sagar waghmare",
  skills: ["production", "quality", "jawascript"],
};
let {
  names: I,
  skills: [s1, s2, s3],
} = info3;

console.log(s2);

let city = [
  {
    nams: "gevrai",
  },
  {
    nams: "pune",
  },
];

let [{ nams: n1 }, { nams: n2 }] = city;

let names = ["sagar", "pratik", "rahul"];
let [A, B, C] = names;
console.log(A);

let cities = ["gevrai", "pune", "aurangabad"];
let [D, E, F] = cities;
console.log(D);

function fn5() {
  let info = [
    { first_name: "sagar", last_name: "waghmare" },
    {
      first_name: "pratik",
      last_name: "hiware",
    },
  ];

  let [
    { first_name: f1, last_name: l1 },
    { first_name: f2, last_name: l2 },
  ] = info;
  console.log(f1);
}
fn5();
