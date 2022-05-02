const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let x = 1;
  for ( let i = 1; i < str.length +1; i++) {
   
    
    if (str.charAt(i-1)===str.charAt(i)){
        x++;
   
    
    } else if( x > 1){
     
      result = result + String(x) + str.charAt(i-1);
      x=1
    }else {
   
      result = result + str.charAt(i-1);
      x=1
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
