// function prime(n) {
var n = prompt("enter your numbre");
if (n == 1) {
  alert(`${n} is neither prime nor composite number `);
} else if (n < 0) {
  alert(`${n} is less than zero so it is not a prime number`);
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      var result = `${n} is not a prime number`;
      break;
    } else {
      var result = `${n} is a prime number`;
    }
  }
  alert(result);
}
// }
