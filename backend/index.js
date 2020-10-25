const express = require('express')
const app = express()
const http = require('http').createServer(app).listen(3333)
const io = require('socket.io')(http)
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(require('./src/routes'))
require('./src/config/database')



io.on('connect', socket => {
    console.log(socket.id);
})