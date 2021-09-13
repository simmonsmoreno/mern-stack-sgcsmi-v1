'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCriancaSchema extends Schema {
  up () {
    this.create('crianca_user', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('users.id').onDelete('cascade').index('user_id')
      table.integer('crianca_id').unsigned().references('criancas.id').onDelete('cascade').index('crianca_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('crianca_user')
  }
}

module.exports = UserCriancaSchema
