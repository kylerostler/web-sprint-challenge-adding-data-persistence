const express =require('express')
const Task = require('./model')
const router = express.Router()

router.get('/tasks', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

module.exports = router