'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultasSchema extends Schema {
  up() {
    this.create('consultas', (table) => {
      table.increments()
      table.date('data').notNullable()
      table.time('hora').notNullable()
      table.string('tipo', 60).notNullable()
      table.text('descricao', 60)
      table.boolean('efetuado')
      table.integer('user_id').unsigned().references('users.id').onDelete('cascade').index('user_id')
      table.integer('crianca_id').unsigned().references('criancas.id').onDelete('cascade').index('crianca_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('consultas')
  }
}

module.exports = ConsultasSchema
