// let a="hi there"
// for(let i=0;i<=7;i++){
//     console.log(a);
// }
// if(a.length<7){
//     console.log('hi there')
// }else{
//     console.log("bye bye")
// }

let f = "good day";
for (let i = 0; i <= 8; i++) {
  console.log(f);
}
if (f.length < 7) {
  console.log("having one");
} else {
  console.log("bad day");
}

//Push method--add element to end

let cities = ["pune", "nagpur", "mumbai", "hydrabad"];
console.log(cities);
let nb = cities.length;
console.log(nb);
let vb = cities.push("thane");
console.log(vb);
console.log(cities);

// unshift---add element to to start

let vn = cities.unshift("gevrai");
console.log(vn);
console.log(cities);

// pop--removes last element from last and and returns same element

let gh = cities.pop();
console.log(gh);
console.log(cities);

// shift--removes element from start

let gf = cities.shift();
console.log(gf);
console.log(cities);
console.log(cities.length);
console.log(cities[2]);

// includes--same as string gives boolean type return i.e true or false

let bc = cities.includes("mumbai");
console.log(bc);
let nv = cities.includes("Mumbai");
console.log(nv);

// reverse--reverse the element from arrays

let pn = cities.reverse();
console.log(pn);

// join---joins the all element in array
let gb = cities.join("hero");
console.log(gb);

// program 1

// let year=[22,11,50,40]
// let birthyear=[]
// console.log(year)
// for(let i=0;i<year.length;i++){
//     console.log(i)
//     console.log(2022-year[i])
//     let bb=2022-(year[i])
//     birthyear.push(bb)
// }
// console.log(birthyear)

// let year1=[30,31,32,34]

// console.log(year1)
// // let vc=year.length
// // console.log(vc)
// let birthyar1=[]
// for(let i=0;i<year1.length;i++){
//     let nh=2022-(year1[i])
//     birthyar1.push(nh)
// }
// console.log(birthyar1)

let year3 = [22, 23, 24, 25];
let birthyear3 = [];
for (let i = 0; i < year3.length; i++) {
  let bh = 2022 - year3[i];
  birthyear3.push(bh);
}
console.log(birthyear3);

let year4 = [1, 2, 3, 4];
let birthyear4 = [];
for (let i = 0; i < year4.length; i++) {
  let hk = 2022 - year4[i];
  birthyear4.push(hk);
}
console.log(birthyear4);

// program 2

let num = [20, 33, 50, 70, 25];
//   let morethan30=[]
for (let i = 0; i < num.length; i++) {
  if (num[i] > 30) {
    console.log("great");
  } else {
    console.log("its ok");
  }
  // morethan30.push(num[i])
}

//   console.log(morethan30)

let target = [45, 50, 60, 70, 90, 400, 350];
let belowtarget = [];
for (let i = 0; i < target.length; i++) {
  if (target[i] < 100) {
    belowtarget.push(target[i]); //target[0] 45 // i<100 true target[true]
  }
}
console.log(belowtarget);

let marks = [75, 80, 90, 60, 55];
let firstclass = [];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 70) {
    console.log("firstclass");
  } else {
    console.log("not fisrt class");
  }
}
// firstclass.push(marks[i])

// we can write function by three methods
// 1)function declaration
// 2)function expression
// 3)arrow function

// 1) function declaration

function calculation(x, y) {
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);
  console.log(x % y);
}
calculation(22, 50);

// function expression

let calculation1 = function (x, y) {
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);
  console.log(x % y);
};
calculation1(40, 20);

// arrow function

// let calculation2=function(x,y){
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
//     console.log(x%y)
// }
//         calculation2(12,4)

// ARRAY METHODS
// map(),filter(),reduce(),foreach(),some(),every(),find(),findindex()

// map method
// action-works with every element of array
// return-new string

// let ages=[1,2,3,4,5]
// // // ages.map(function(ele,index,array){
// // //     console.log(ele,index,array)
// // })
// let birthyear1=ages.map(function(ele){
//     return 2022-ele
// })
// console.log(birthyear1)

let birthyear = [2021, 2020, 2019, 2018, 2017];
let ages1 = birthyear.map(function (ele) {
  return 2022 - ele;
});
console.log(ages1);

// filter

let numb = [22, 55, 30, 50, 40];
let required = numb.filter(function (ele) {
  return ele % 2 == 0;
});
console.log(required);
// let ages=arr.map(function(ele){})
let names = ["sachin", "peter", "dieter", "chetan", "Dipesh", "kunal", "aimee"];
// let searchValue;

function requirednames(keySearch) {
  return names.filter(function (ele) {
    return ele.includes(keySearch);
  });
}
console.log(requirednames("sac"));
console.log(requirednames("er"));
console.log(requirednames("ee"));

let ground = ["pune", "nagpur", "kolhapur", "solapur"];
let availablevenue = ground.filter(function (ele) {
  return ele.endsWith("e");
});
console.log(availablevenue);

// map

let marks1 = [75, 80, 60, 65, 44, 87, 90];
let extra_marks = marks1.map(function (ele) {
  return ele + 5;
});
console.log(extra_marks);

let expenses = [30, 45, 60, 80, 88];
let discount = expenses.map(function (ele) {
  return ele - 5;
});
console.log(discount);

// filter
let expenses1 = [30, 45, 60, 80, 88];
extraexpenses = expenses1.filter(function (ele) {
  return ele > 50;
});
console.log(extraexpenses);

// reduce--one extra variable i.e accumulatori.e like(fn,accumulator)i.e like (acc,ele,ind,array)

let expenses2 = [30, 45, 60, 80, 88];
let totalexpenses = expenses2.reduce(function (acc, ele) {
  return acc + ele;
}, 0);
console.log(totalexpenses);

let expenses3 = [30, 45, 60, 80, 88];
let withgst = expenses3.reduce(function (acc, ele) {
  return acc + ele;
}, 100 / 18);
console.log(withgst);
// arr.reduce(function(acc,ele){},0)
let prize = [28, 90, 77, 60, 55, 83];
let totalbillwithgst = prize.reduce(function (acc, ele) {
  return acc + ele;
}, 100 / 18);
console.log(totalbillwithgst);

// foreach---return nothing

let cities1 = ["gevrai", "beed"];
cities1.forEach(function (ele) {
  console.log("welcome to " + ele);
});

// find---single element (first occurence)

let ages = [22, 25, 18, 17, 13, 14, 11];
let illegalage = ages.find(function (ele) {
  return ele <= 18;
});
console.log(illegalage);

// findindex---number (first occurence )
let ages2 = [22, 25, 18, 17, 13, 14, 11];
let childlabour = ages2.findIndex(function (ele) {
  return ele <= 18;
});
console.log(childlabour);

// every--- boolean(every element should satisfy the condition)

let divby2 = [2, 4, 6, 7, 8, 10];
let evennumber = divby2.every(function (ele) {
  return ele % 2 == 0;
});
console.log(evennumber);

// some--- boolean(if one element also satisfy the condition)

let divBy2 = [2, 4, 6, 7, 8, 10];
let Evennum = divBy2.some(function (ele) {
  return ele % 2 == 0;
});
console.log(Evennum);

let number1 = [2, 5, 6, 8, 9];
let cube = number1.map(function (ele) {
  return Math.pow(ele, 3);
});
console.log(cube);

let number2 = [2, 5, 6, 8, 9];
let pow5 = number2.map(function (ele) {
  return Math.pow(ele, 5);
});
console.log(pow5);

let number3 = [2.5];
let bn = number3.map(function (ele) {
  return Math.round(ele);
});
console.log(bn);

// ASK THIS IN SUPPORT SESSION AFTER REDUCE METHOD IT RETURNS SINGLE NUMBER THEN COULD WE APPLY MAP METHOD FURTHER ON RETUN OF REDUCE METHOD
let a = [2, -2, 3, -3, 4, -4];
let pos = a.filter(function (ele) {
  return ele > 0;
});
let hj = [];
let getvalue = pos.reduce(function (acc, ele) {
  return acc + ele;
}, 0);
// let gn = hj.push(getvalue);
// console.log(gn);
console.log(getvalue);
// let more = pos.map(function (ele) {
//   return ele + 2;
// });
// console.log(more);

let names1 = "sagar pratik rahul";
let bb = names1.split(" ");
let hn = bb.map(function (ele) {
  return ele[0];
});
console.log(hn);
// let jn = hn.join(hn);
// console.log(jn);

// ASK THIS IN SUPPORT SESSION [ele%2==0 showing boolean i.e true or false in return when used map method]
let gv = [2, 4, 7, 10, 5, 12];
let fb = gv.map(function (ele) {
  return ele + 2;
});
// console.log(fb);
let hg = fb.reduce(function (acc, ele) {
  return acc + ele;
}, 0);
console.log(hg);

let yy = [2, -4, 8, -16, 53, 31, 11, -77, 32, -40, 33, 47, -64];
let xx = yy.map(function (ele) {
  return ele % 2 == 0;
});
// console.log(xx);
let zz = xx.filter(function (ele) {
  return ele > 0;
});
let got = zz.reduce(function (acc, ele) {
  return acc + ele;
}, 0);
console.log(got);

// slice method-same as in string removes assigned index last index is inclusive same as string and return removed or sliced string

let namess = ["sagar", "pratik", "pandya", "rahul", "ganesh", "heena"];
let friends = namess.slice(3, 5);
console.log(friends);

// flat method-joins internal multi arrays
let ss = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(ss[0][1]);
let ff = ss.flat();
console.log(ff);

// splice-add and removes any element assingned in array not as pop and shift which only removes last and first ele
let names4 = ["sagar", "pratik", "pandya", "rahul", "ganesh", "heena"];
let frnd = names4.splice(3, 4, 5, "pratik", "sid");
console.log(names4);

// sort--arrange order in alphabetical order
let names5 = ["waghmare", "somnnath", "sagar"];
let correctname = names5.sort();
console.log(correctname);

let aphabets = ["a", "g", "h", "b", "c", "d"];
let correctalphabets = aphabets.sort();
console.log(correctalphabets);
// fill--fills other element which assigned in statement with index

// names5 = ["sagar", "rrr", "vvv"];
// let names6 = names5.fill("somnath", 1, 3);
// console.log(names6);
