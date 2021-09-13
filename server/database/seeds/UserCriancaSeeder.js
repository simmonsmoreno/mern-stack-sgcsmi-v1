'use strict'

/*
|--------------------------------------------------------------------------
| UserCriancaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserCriancaSeeder {
  async run() {

    const user = await Factory.model('App/Models/User').create()
    const crianca = await Factory.model('App/Models/Crianca').make()

    await crianca.users().save(user)

  }
}

module.exports = UserCriancaSeeder
