'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoseSchema extends Schema {
  up() {
    this.create('doses', (table) => {
      table.increments()
      table.integer('vacina_id').unsigned().references('id').inTable('vacinas').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('designacao').notNullable()
      table.text('descricao')
      table.boolean('estado').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('doses')
  }
}

module.exports = DoseSchema
