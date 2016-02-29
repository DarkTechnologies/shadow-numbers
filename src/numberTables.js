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
        fourty: 40, //VERY common misspelling
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        hundred: 100,
        thousand: 1000,
    }    
};