var app = require("../add.js");

describe("addition", function() {
  it("the function should add 2 numbers", function() {
    var value = app.addNumber(5, 6);
    expect(value).toEqual(11);
  });
});