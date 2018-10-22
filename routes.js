function routes(app) {
  
  // Register API routes here
  app.get('/api', (req, res) => res.json({message: 'Sample route'}))
}

module.exports = { init: routes }