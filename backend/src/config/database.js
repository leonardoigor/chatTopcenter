const { join } = require('path')



module.exports = {
    dialect: 'sqlite',
    storage: join(__dirname, '../database/database.sqlite'),
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}