'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.integer('cni').unsigned().notNullable().unique()
      table.string('firstname', 30).notNullable()
      table.string('lastname', 50).notNullable()
      table.string('password', 60).notNullable()
      table.string('cargo', 30).notNullable()
      table.string('address', 40)
      table.integer('phone')
      table.string('photo')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
