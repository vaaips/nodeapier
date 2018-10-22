const express = require('express')
const routes = require('./routes')

const app = express()
routes.init(app)

app.listen(8000, () => console.log('Server run on port 8000'))