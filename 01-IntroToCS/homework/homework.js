'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 var array = num.split('');
 var sum=0;
for (var i=0; i < array.length; i++){
sum = sum + Math.pow (2, array.length-1-i)* array[i];

}return sum 
}


function DecimalABinario(num) {
  // tu codigo aca
// if (num <= 0) return '000000';

var array = [];
while (num > 0 ){
  array.unshift(num%2);
  num = Math.floor(num/ 2);
  }
  return array.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
} 