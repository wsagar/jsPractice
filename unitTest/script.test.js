const arrFun = require("./script");

describe("arrayTest", () => {
  const fnTest = arrFun();
  it("should have empty array", () => {
    expect(fnTest.arr).toHaveLength(0);
  });
  describe("addItem", () => {
    it("should add element toarray", () => {
      const previousLength = fnTest.arr.length;
      fnTest.addItem(10);
      expect(fnTest.arr.length).toBe(previousLength + 1);
      expect(fnTest.arr).toContain(10);
    });
  });

  describe("removeITem", () => {
    it("should remove item at given index", function () {
      fnTest.arr = [1, 2, 3];
      const previousLength = fnTest.arr.length;
      fnTest.removeItem(1);
      expect(fnTest.arr.length).toBe(previousLength - 1);
      expect(fnTest.arr).not.toContain(2);
    });
  });

  describe("updateItem", () => {
    it("should update item at given index", function () {
      fnTest.arr = [1, 2, 3];
      const previousLength = fnTest.arr.length;
      fnTest.updateItem(1, 5);
      expect(fnTest.arr.length).toBe(previousLength);
      expect(fnTest.arr).not.toContain(2);
    });
  });
});
