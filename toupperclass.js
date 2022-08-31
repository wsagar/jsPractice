let sentence = "let me see you";
console.log(sentence);
function cap(sentence) {
  let arr = sentence.split(" ");
  const newarr = [];
  //   console.log(arr);
  //   for (let i = 0; i <= arr.length; i++) console.log(arr[i]);
  for (const ele of arr) {
    let fletter = ele.substring(0, 1);
    fletter = fletter.toUpperCase();
    // console.log(fletter);
    let rletter = ele.substring(1);
    // console.log(rletter);
    newarr.push(fletter + rletter);
  }

  return newarr.join(" ");
}
console.log(cap("let me see you"));

function capital(sentence) {
  let newsen = [];
  let arr = sentence.split(" ");
  //   console.log(arr);
  for (const ele of arr) {
    let a = ele.substring(0, 1);
    a = a.toUpperCase();
    // console.log(a);
    let b = ele.substring(1);
    // console.log(b);

    let sen = newsen.push(a + b);
    console.log(sen);
  }
  return newsen;
}
console.log(capital("i love you "));

function disp(fn) {
  return fn();
}
console.log(
  disp(function () {
    return "welcome";
  })
);

let greet = (fnn) => {
  return fnn();
};
console.log(
  greet(function () {
    return "hello";
  })
);

// to lowercase

let sentence1 = "NOTHING IS IMPOSSIBLE";
function tolow() {
  let required = [];
  let ad = sentence1.split(" ");
  console.log(ad);

  for (const ele of ad) {
    let firstchar = ele.substring(0, 1);
    // console.log(firstchar);
    let restchar = ele.substring(1);
    // console.log(restchar);
    restchar = restchar.toLowerCase();
    console.log(restchar);
    required.push(firstchar + restchar);
    console.log(required);
  }

  return required.join(" ");
}
console.log(tolow("NOTHING IS IMPOSSIBLE"));

let quote = "Love the life you live";
// required=Love The Life You Live

function toupp() {
  let require = [];
  let sent = quote.split(" ");
  console.log(sent);
  for (let ele of sent) {
    let firstchar = ele.substring(0, 1);
    // console.log(firstchar);
    firstchar = firstchar.toUpperCase();
    // console.log(firstchar);
    let restchar = ele.substring(1);
    console.log(restchar);
    require.push(firstchar + restchar);
  }
  return require.join(" ");
}
console.log(toupp("Love the life you live"));
