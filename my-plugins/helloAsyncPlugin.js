function HelloAsyncPlugin (options) {
  debugger
  console.log(options.amish)
}

HelloAsyncPlugin.prototype.apply = function (compiler) {
  debugger
  compiler.plugin('emit', function (compilation, callback) {
    // Do something async...
    setTimeout(function () {
      console.log('Done with async work...')
      callback()
    }, 1000)
  })
}

module.exports = HelloAsyncPlugin
