'use strict'
const {getRepos} = require('./handlers/repos')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/repos/:org', getRepos)
}
