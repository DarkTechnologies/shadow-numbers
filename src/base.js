/**
 * base.js
 * Core module that builds the basic structuring.
 * copyright Dark Technologies, Inc. 2016
 * Originator: Shawn Rapp 2/28/2016
 */

if (!module.exports.DTShadow) {
    module.exports.DTShadow = {};
}

module.exports.DTShadow.Numbers = function(numberString){
    this.tables = require('./numberTables');
    this.parseNumber = require('./parseNumber');
    
    this.parseNumber(numberString);
};