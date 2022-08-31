function addition() {
  let x = 10;
  let y = 20;

  console.log(x + y);
  // here a and b are not accesible
  function add() {
    let a = 20;
    let b = 22;
    console.log(a + b + x + y);
    // x and y are accesible
    // i.e parents varibale is accesible in child function but childs variables are not accesible in parents function
    function add1() {
      let x1 = 33;
      let y1 = 35;

      console.log(x1 + y1 + x + y + a + b);
    }
    add1();
  }
  add();
}
addition();
