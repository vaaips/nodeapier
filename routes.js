/*
 * Register API routes
 */

exports.init = function(app) {
  app.get('/api', (req, res) => res.json({message: 'Welcome to API server'}))
}