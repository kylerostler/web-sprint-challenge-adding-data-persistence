/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema 
        .createTable('projects', tbl => {
            tbl.increments('project_id');
            tbl.string('project_name', 100)
                .notNullable();
            tbl.string('project_description', 100);
            tbl.boolean('project_completed');
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id');
            tbl.string('resource_name')
                .notNullable()
                .unique();
        })  
        .createTable('tasks', tbl => {
            tbl.increments('task_id');
            tbl.string('task_description')
                .notNullable();
            tbl.string('task_notes', 100);
            tbl.boolean('task_completed');
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
        })
        .createTable('resource_assignments', tbl => {
            tbl.increments('resource_assignment_id');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources');
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('resource_assignments')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
