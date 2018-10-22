const express = require('express')
const config = require('./server.config')
const routes = require('./routes')

const app = express()
const hostname = config.hostname
const port = config.port

routes.init(app)

app.listen(port, hostname, () => console.log(`Server running on http://${hostname}:${port}`))