function arrayTest() {
  this.arr = [];
  this.addItem = function (x) {
    this.arr.push(x);
  };
  this.removeItem = function (index) {
    this.arr.splice(index, 1);
  };
  this.updateItem = function (index, value) {
    this.arr[index] = value;
  };

  return this;
}

//arr = [1,2,3]
//updateITem(1,5)
//arr = [1,5,3]

module.exports = arrayTest;
