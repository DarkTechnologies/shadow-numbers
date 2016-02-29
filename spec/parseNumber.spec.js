#!javascript

var parseNumber = require('../src/parseNumber');

describe('parseNumber', function() {
   it('should make string "42" into integer 42', function() {
      var testValue = parseNumber('42');
      expect(testValue).toBe(42);
   });

   it('should make string "fourty two" into integer 42', function(){
       var testValue = parseNumber('fourty two');
       expect(testValue).toBe(42);
   });
   
   it('should make string "four two" into integer 42', function(){
       var testValue = parseNumber('four two');
       expect(testValue).toBe(42);
   });
   
   it('should be able to convert "forty two hundred" into integer 4200', function() {
       var testValue = parseNumber('forty two hundred');
       expect(testValue).toBe(4200);
   });
   
});