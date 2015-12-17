/*
 * Copyright (c) 2015, Skyler Layne. All rights reserved.
 * Copyrights licensed under the MIT License.
 * See the accompanying LICENSE file for terms.
 */
(function () {
'use strict';

var Bag = function() {

};

/*
* Error 1: Not a valid amout or item name
* Error 2: No items to add
*/
Bag.prototype.add = function(amount, thing) {
  if(isNaN(amount) || amount < 0 || typeof thing != 'string') {
    throw "Not a valid amout or item name";
  }
  if(this[thing] !== undefined){
    this[thing] += amount;
  } else {
    this[thing] = amount;
  }
};

/*
* Error 1: Not a valid amout or item name
* Error 2: No items in the bag
* Error 3: Not enough items in the bag
*/
Bag.prototype.remove = function(amount, thing) {
  if(isNaN(amount) || amount < 0 || typeof thing != 'string') {
    throw "Not a valid amout or item name";
  }
  if(this[thing] !== undefined && this[thing] > amount){
    this[thing] -= amount;
  } else {
    throw 'Not enough in the bag';
  }
};


// Make the bag a real thing.
module.exports = Bag;
}());
