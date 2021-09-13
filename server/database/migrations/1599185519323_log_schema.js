'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LogSchema extends Schema {
  up () {
    this.create('logs', (table) => {
      table.increments()
      table.text('message', 120)
      table.integer('user_id').unsigned()
      table.string('user', 40)
      table.string('url', 40)
      table.timestamps()
    })
  }

  down () {
    this.drop('logs')
  }
}

module.exports = LogSchema
