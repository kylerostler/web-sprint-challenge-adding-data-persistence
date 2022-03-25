const express =require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

module.exports = router