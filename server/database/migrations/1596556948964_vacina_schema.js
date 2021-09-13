'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VacinaSchema extends Schema {
  up () {
    this.create('vacinas', (table) => {
      table.increments()
      table.integer('crianca_id').unsigned().references('criancas.id').onDelete('cascade').index('crianca_id')
      table.string('tipo', 20).notNullable()
      table.text('descricao', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('vacinas')
  }
}

module.exports = VacinaSchema
