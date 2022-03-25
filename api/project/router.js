const express =require('express')
const Project = require('./model')
const router = express.Router()

router.get('/projects', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

module.exports = router