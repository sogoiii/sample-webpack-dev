var Buffer = require('buffer').Buffer
module.exports = function (source) {
  debugger // Put a debugger here so debugging pauses here. Remove when completed
  this.cacheable(); // Tell webpack this is cacheable
  // var myCallback = this.async() // if enabled, return undefined and call myCallback(error, value) when done
  console.log(source) // this is what was required/imported
  console.log(this.query) // this is what is provided as a query parameter or json object
  console.log(this.context) // this is the source file directory
  console.log(this.resourcePath) // this is the sourced file

  return new Buffer(JSON.stringify({ teacher: 'Louanne Johnson' }), 'utf-8') //disable if you want to test this.async()

  /* if this.async() was called, you have to return undefined and call the myCallback */
  // myCallback(null, new Buffer(JSON.stringify({ teacher: 'Louanne Johnson' }), 'utf-8'))
  // return
}
