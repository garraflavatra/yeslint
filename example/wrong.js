'why not use strict?';

module.exports = {
  "properties"  : `This is ugly, the whitespace is too much, and the backticks are unnecessary`,

  object:{spacing:'required!'},

  functions: [( env )=>  console.log(env.password),function  ({password}) { console.log( password  )}],

  arrays: [1,2,3]
}
