// module.exports = require("./lib/bag");
var Bag = require("./lib/bag");
var bag = new Bag();
console.log(bag.toString() + " " + typeof "this");

bag.add(2, "cat");
// bag["cat"] = 2;
bag.add(1, 2)
console.log(bag["cat"]);
