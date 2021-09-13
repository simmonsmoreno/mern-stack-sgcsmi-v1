'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CriancaSchema extends Schema {
  up () {
    this.create('criancas', (table) => {
      table.increments()
      table.integer('cni').unsigned().notNullable().unique()
      table.string('firstname', 40).notNullable()
      table.string('lastname', 50).notNullable()
      table.date('dob').notNullable()
      table.string('sex', 15)
      table.string('address', 40)
      table.string('tparto', 20).notNullable()
      table.decimal('tgestac', 3, 1).unsigned()
      table.decimal('pesonasc', 3, 2).notNullable().unsigned()
      table.decimal('altnasc', 3, 1).notNullable().unsigned()
      table.decimal('perimnasc', 3, 1).notNullable().unsigned()
      table.string('photo')
      table.timestamps()
    })
  }

  down () {
    this.drop('criancas')
  }
}

module.exports = CriancaSchema
