'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {
  return {
    gen: promisify((args, opts, callback) => {
      if (typeof (opts) === 'function') {
        callback = opts
        opts = {}
      }
      send({
        path: 'key/gen',
        args: args,
        qs: opts
      }, callback)
    }),
    list: promisify((opts, callback) => {
      if (typeof (opts) === 'function') {
        callback = opts
        opts = {}
      }
      send({
        path: 'key/list',
        qs: opts
      }, callback)
    })
  }
}
