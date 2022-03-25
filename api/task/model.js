const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

module.exports = { getTasks }