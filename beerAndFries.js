'use strict';

var beerAndFries = function (items) {
    if(items.length === 0){
        return 0;
    }
    var fries = [],
    var beers = [],
    items.forEach(function (elem) {
        if (elem.type === "beer") {
            beers.push(elem.score);
        }
      else {
            fries.push(elem.score);
       }
    });
    beers.sort(function (a, b) {
        return a-b;
    });

    fries.sort(function (a, b) {
         return a-b;
    });
    var result = 0;
    beers.forEach(function (_, i) {
         result += beers[i].score * fries[i].score;
    });

     return result;
};

exports.beerAndFries = beerAndFries;
