const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return getTasks().where({ task_id }).first()
}

module.exports = { getTasks, createTask }