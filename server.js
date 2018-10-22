const express = require('express')

const app = express()

// Routes
app.get('/api', (req, res) => res.json({message: 'Welcome to API server'}))

app.listen(8080, () => console.log('Server run on port 8080'))