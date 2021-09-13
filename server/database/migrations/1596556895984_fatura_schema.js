'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaturaSchema extends Schema {
  up () {
    this.create('faturas', (table) => {
      table.increments()
      table.integer('consulta_id').unsigned().references('consultas.id').onDelete('cascade').index('consulta_id')
      table.integer('quantia').unsigned().notNullable()
      table.string('metodo')
      table.integer('totalpago').unsigned()
      table.integer('troco').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('faturas')
  }
}

module.exports = FaturaSchema
