const Router = require('express').Router()
const db = require('./app/models/index')

Router.get('/', (req, res) => {
    res.json('t')
})
const { User } = db.sequelize.models


console.log(db.sequelize.models, 'data');

Router.post('/create', async (req, res) => {
    console.log(req.body, 'body');
    const hasUser = await User.findAll({ where: { name: req.body.name } });
    if (!hasUser.length) {
        const user = await User.create({
            ...req.body
        })
        res.send(user)
    } else {

        res.send(hasUser[0])
    }


})

Router.get('/getUser/:id', async (req, res) => {
    res.send(await User.findAll()
    )
})

module.exports = Router