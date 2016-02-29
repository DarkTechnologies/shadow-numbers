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
    var numberTables = require('./numberTables');
    var spelledDigits = '';
    
    function convertCount(numWord) {
        var countVal = 0;
        if (numWord.match(/\d+/)) {
            //word is in digital notation and sets the count value
            var results = numWord.match(/\d+/);
            countVal = Number(results[0]);
        } else if (numberTables.numbers.indexOf(numWord) > -1) { //word is a digit
            //look up the number word in the table
            countVal = numberTables.numbers.indexOf(numWord);
        }
        
        return countVal;
    }
    
    function isCount(numWord) {
        return ((numWord.match(/\d+/)) || (numberTables.numbers.indexOf(numWord) > -1));
    }
    
    function isUnit(numWord) {
        return (numberTables.numericUnits[numWord] !== undefined);
    }
    
    function convertUnit(numWord) {
        return numberTables.numericUnits[numWord];
    }

    numberWords.forEach(function(numWord) {
        if (isCount(numWord)) {
            if (countValue) { //prior value was a count value as well
                if (unitValue == 1) { //previous word was a count as well
                    if (spelledDigits == '') {
                        spelledDigits = '' + countValue + convertCount(numWord);
                    } else {
                        spelledDigits += '' + convertCount(numWord);
                    }
                } else {
                    console.log('unitValue', unitValue);
                    retVal += countValue * unitValue;
                }
            } else { //not specifying a count than a unit infers there is one of that unit
                if (unitValue > 1)
                    retVal += unitValue;
            }
            
            if (spelledDigits == '') {
                unitValue = 1;
                countValue = convertCount(numWord);
            }
        }
        
        if (isUnit(numWord)) {
            if (spelledDigits != '') {
                countValue = convertCount(spelledDigits);
                spelledDigits = '';
            }
            unitValue = convertUnit(numWord);
        }
    });

    if (spelledDigits !== '') {
        countValue = Number(spelledDigits);
    }

    retVal += (countValue * unitValue);

    return retVal;
};
