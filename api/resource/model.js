const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

module.exports = { getResources }