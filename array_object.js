function fn1() {
  let balaji_coll = [
    {
      brand: "levis",
      type: "jeans",
      qtysold: 20,
      prizerange: "medium",
    },
    {
      brand: "CC",
      type: "t_shirts",
      qtysold: 22,
      prizerange: "medium",
    },
    {
      brand: "arrow",
      type: "shirts",
      qtysold: 15,
      prizerange: "high",
    },
    {
      brand: "local",
      type: "all",
      qtysold: 30,
      prizerange: "cheap",
    },
  ];
  balaji_coll.forEach(function (ele) {
    console.log(
      `balaji_collection sells
          ${ele.brand}
          in
          ${ele.type}
          whose prizerange is
          ${ele.prizerange}`
    );
  });
  let info = balaji_coll
    .filter(function (ele) {
      return ele.qtysold > 20;
    })
    .reduce(function (acc, ele) {
      return acc + ele.qtysold;
    }, 0);
  console.log(info);
  let bb = balaji_coll
    .filter(function (ele) {
      return ele.qtysold > 20;
    })
    .map(function (ele) {
      ele.goodtosell = "yes";
      return ele;
    });
  console.log(bb);
  for (let property in balaji_coll) {
    console.log(property, balaji_coll[property]);
  }
}
fn1();

function fn2() {
  let clinic = [
    {
      patient_name: "sagar",
      diesease: "eye",
      bill: 4000,
      medication: ["a", "b", "c", "d"],
      progress: "b",
    },
    {
      patient_name: "pratik",
      diesease: "skin",
      bill: 4500,
      medication: ["a", "b", "c", "x"],
      progress: "a",
    },
    {
      patient_name: "dharti",
      diesease: "hairs",
      bill: 5500,
      medication: ["a", "b", "c", "x"],
      progress: "c",
    },
    {
      patient_name: "tanmay",
      diesease: "hairs",
      bill: 6500,
      medication: ["a", "b", "c", "x"],
      progress: "a+",
    },
  ];
  clinic.forEach(function (ele) {
    console.log(
      `in clinic there is ${ele.patient_name} whose suffuring from diesese of ${ele.diesease} having bills of ${ele.bill}  with mediaction of ${ele.medication}`
    );
  });
  let bills = clinic
    .filter(function (ele) {
      return ele.bill > 5000;
    })
    .map(function (ele) {
      ele.worthy_patient = "yes";
      return ele;
    })
    .filter(function (ele) {
      return ele.progress == "a+";
    });
  console.log(bills);
}
fn2();
