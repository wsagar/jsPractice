let city1 = {
  name: "pune",
  state: "maharahstra",
  population: 11,
  language: "marathi",
};

let city2 = {
  name: "alahabad",
  state: "up",
  population: 20,
  language: "hindi",
};

let city3 = {
  name: "madgaon",
  state: "goa",
  population: 1,
  language: ["marathi", "hindi"],
};

let city_info = function (capital, governmant) {
  console.log(
    `${this.name} is in ${this.state} with populaton of ${this.population} who speaks ${this.language} and its capital is ${capital} and here government of ${governmant}`
  );
};

city_info.apply(city1, ["mumbai", "bjp"]);
city_info.apply(city3, ["punji", "bjp"]);
