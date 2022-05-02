const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayNumber = [];
  arrayDelete = []
  let array= [];
  let arrayResult = [];
  let nString;
  nString = String(n);
  

  for (let i = 0; i < nString.length; i++){
    arrayNumber.push(nString[i]);
   
  }

 for (let i = 0; i < arrayNumber.length; i++) {
   arrayDelete = arrayNumber.slice(0); 
   
   arrayDelete.splice(i, 1);
   array =  arrayDelete.slice(0)
   
    arrayResult.push(Number(array.join('')));
    
  }

  console.log(arrayResult);
  console.log(arrayResult[0]);
 arrayResult.sort(function (x, y) {
    return y - x;
  });
  console.log(arrayResult);
  
  return arrayResult[0];

};

module.exports = {
  deleteDigit
};
