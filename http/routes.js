const controller = require('../controllers')

function routes(app) {
  
  // Register API routes here
  app.get('/api/posts', (req, res) => controller.posts.get(req, res))
}

module.exports = { init: routes }