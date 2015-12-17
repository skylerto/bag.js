var expect = require("chai").expect;
var Bag = require("../lib/bag");

describe("Bag", function() {
  it("should create a bag", function() {
    var bag = new Bag();
    expect(typeof bag).to.equal('object');
  });
});

describe("Bag.add()", function() {

  var bag = new Bag();

  it("should add to a bag", function() {
    bag.add(1, "cat");
    expect(bag["cat"]).to.equal(1);
  });

  it("should throw a 'Not a valid amout or item name' error", function() {
    expect(function() {
      bag.add(1, 2)
    }).to.throw("Not a valid amout or item name");
  });

  it("should throw a 'Not a valid amout or item name' error", function() {
    expect(function() {
      bag.add("steve", 2)
    }).to.throw("Not a valid amout or item name");
  });
});

// describe("Bag.remove()", function(){
//   var bag = new Bag();
//   bag.add(1, "cat");
//
//   it("should remove from a bag", function(){
//     bag.remove(1, "cat");
//     expect(bag["cat"]).to.equal(0);
//   });
//
//   it("should throw a 'Not a valid amout or item name' error", function() {
//     expect(function() {
//       bag.remove(1, 2)
//     }).to.throw("Not a valid amout or item name");
//   });
//
//   it("should throw a 'Not a valid amout or item name' error", function() {
//     expect(function() {
//       bag.remove("steve", 2)
//     }).to.throw("Not a valid amout or item name");
//   });
// });
