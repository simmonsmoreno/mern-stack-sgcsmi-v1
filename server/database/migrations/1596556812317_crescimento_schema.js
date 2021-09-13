'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CrescimentoSchema extends Schema {
  up () {
    this.create('crescimentos', (table) => {
      table.increments()
      table.integer('crianca_id').unsigned().references('criancas.id').onDelete('cascade').index('crianca_id')
      table.decimal('peso', 4, 2).notNullable().unsigned()
      table.decimal('altura', 4, 1).notNullable().unsigned()
      table.decimal('perimcef', 4, 1).notNullable().unsigned()
      table.string('orofaringe')
      table.string('foop')
      table.string('torax')
      table.string('respiratorio')
      table.string('abdomen')
      table.string('anca')
      table.string('pele')
      table.string('reflexos')
      table.timestamps()
    })
  }

  down () {
    this.drop('crescimentos')
  }
}

module.exports = CrescimentoSchema
