//You are given a large integer represented as an integer array
// digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant
// to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.


var plusOne = function(digits) {

   let joinNumber =  digits.join('');

   let result = (+joinNumber + 1).toString().split('').map(item => +item);

   return result;

};

console.log(plusOne([6,1,4,5,3,9,5,4,3]));



