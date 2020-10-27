const express = require('express')
const app = express()
const http = require('http').createServer(app).listen(3000, '192.168.1.106')
const io = require('socket.io')(http)
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(require('./src/routes'))
require('./src/config/database')


const Container = {
    users: [], messages: []
}
function setup (socket = null, isbroad) {
    let newdata = { ...Container }
    if (!isbroad) {
        socket.emit('setup', newdata)
    }
    else {
        socket.broadcast.emit('setup', Container)

    }
}

io.on('connect', socket => {
    let current = {}
    function newUser (socket) {
        socket.on('newUser', data => {
            console.log(data, 'dataNewuser');
            current = { ...data }
            current.user.id = socket.id
            current.user.online = true
            Container.users.push(current)
            socket.broadcast.emit('newUser', current)
            socket.emit('MyUser', current)
            console.log(current.user, 'current')
            console.log(Container, 'newUser');
            console.log('final', current);
        })
    }


    setup(socket)
    newUser(socket, current)
    // current = newUser(socket, current)


    socket.on('disconnect', () => {
        console.log('_______________________________________________--');
        Container.users.map((r, i) => {
            console.log(current.user, 'r.user', r.user.id, 'current', current);
            if (current.user && r.user.id === current.user.id) {
                Container.users.splice(i, 1)
            }
        })
        setup(socket, true)
    })
})