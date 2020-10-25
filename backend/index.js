const express = require('express')
const app = express()
const http = require('http').createServer(app).listen(3333)
const io = require('socket.io')(http)
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(require('./src/routes'))
require('./src/config/database')


let Container = {
    users: [], messages: []
}

io.on('connect', socket => {
    let current = {}

    socket.emit('setup', Container)

    socket.on('newUser', data => {
        current = data
        current.user.id = socket.id
        current.user.online = true
        Container.users.push(current)
        socket.broadcast.emit('newUser', current)
        socket.emit('MyUser', current)
        console.log(current.user, 'container')
    })


    socket.on('disconnect', () => {
        Container.users.map((r, i) => {
            if (r.user.id === current.user.id) {
                Container.users.splice(i, 1)
                socket.broadcast.emit('setup', Container)
                console.log(r, 'delited');
            }
        })
    })
})