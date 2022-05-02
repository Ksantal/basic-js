const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = [];
  let arrayEmail = [];
  for (let i = 0; i < email.length; i++){
    arrayEmail.push(email.charAt(i));
  };
  for (let i = arrayEmail.length; i > 0; i--){
      if(arrayEmail[i]==='@'){
      for (let j = i+1; j< arrayEmail.length; j++){
        domain.push(arrayEmail[j]);
      }
      domain = domain.join('');
      return domain;
      
    }
  }
  
}

module.exports = {
  getEmailDomain
};
