var b;
var Bag = function() {
//  b = [];
}

/*
* Event Guard 1: Not a valid amout or item name
* Event Guard 2: No items to add
*/
Bag.prototype.add = function(amount, thing) {
  if(isNaN(amount) || amount < 0 || typeof thing != 'string') {
    throw "Not a valid amout or item name";
  }
  if(this[thing] != undefined){
    this[thing] += amount;
  } else {
    this[thing] = amount;
  }
}

/*
* Event Guard 1: Not a valid amout or item name
* Event Guard 2: No items in the bag
* Event Guard 3: Not enough items in the bag
*/
Bag.prototype.remove = function(amount, thing) {}


module.exports = Bag;
