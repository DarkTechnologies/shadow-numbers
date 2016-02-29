/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	    this.tables = __webpack_require__(1);
	    this.parseNumber = __webpack_require__(2);
	    
	    this.parseNumber(numberString);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * numberTable.js
	 * Tables and values used to help translate.
	 * copyright Dark Technologies, Inc. 2016
	 * Originator: Shawn Rapp 2/28/2016
	 */ 
	module.exports = {
	    //table for spelled numbers
	    numbers: [
	        'zero',
	        'one',
	        'two',
	        'three',
	        'four',
	        'five',
	        'six',
	        'seven',
	        'eight',
	        'nine',
	        'ten',
	        'eleven',
	        'twelve',
	        'thirteen',
	        'fourteen',
	        'fifteen',
	        'sixteen',
	        'seventeen',
	        'eightteen',
	        'ninteen'
	        //after ninteen the numbers are spoken as their unit values
	    ],
	    
	    //numbers that dont follow the paterns of their spelled name plus th
	    numericConstitutions : {
	        first: 1,
	        second: 2,
	        third: 3,
	        fourth: 4,
	        fifth: 5,
	        sixth: 6,
	        seventh: 7,
	        eighth: 8,
	        ninth: 9,
	    },
	    
	    numericUnits: {
	        twenty: 20,
	        thirty: 30,
	        forty: 40,
	        fifty: 50,
	        sixty: 60,
	        seventy: 70,
	        eighty: 80,
	        ninety: 90,
	        hundred: 100,
	        thousand: 1000,
	    }    
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * parseNumber.js
	 * Module provides a human translation of numbers to machine.
	 * copyright Dark Technologies, Inc. 2016
	 * Originator: Shawn Rapp 2/28/2016
	 */
	module.exports = function(numberStr) {
	    var retVal = 0;
	    var numberWords = numberStr.split(' ');
	    var countValue = 0;
	    var unitValue = 1;
	    var numberTables = __webpack_require__(1);
	    
	    function convertCount(numWord) {
	        if (numWord.match(/\d+/)) {
	            //set what the prior value was
	            retVal = countValue * unitValue;
	            //word is in digital notation and sets the count value
	            var results = numWord.match(/\d+/);
	            countValue = Number(results[0]);
	        } else if (numberTables.numbers.indexOf(numWord) > -1) { //word is a digit
	            //set what the prior value was
	            retVal = countValue * unitValue;
	            
	            //look up the number word in the table
	            countValue = numberTables.numbers.indexOf(numWord);
	        }
	    }
	    
	    function isCount(numWord) {
	        return ((numWord.match(/\d+/)) || (numberTables.numbers.indexOf(numWord) > -1));
	    }
	    
	    function isUnit(numWord) {
	        return (numberTables.numericUnits !== undefined);
	    }
	    
	    function convertUnit(numWord) {
	        return numberTables.numericUnits[numWord];
	    }

	    numberWords.forEach(function(numWord) {
	        if (isCount(numWord)) {
	            countValue = convertCount(numWord);
	        }
	        if (isUnit(numWord)) {
	            unitValue = convertUnit(numWord);
	        }
	    });


	    return retVal;
	};


/***/ }
/******/ ]);