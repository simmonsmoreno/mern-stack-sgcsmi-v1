'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Consulta extends Model {

    fatura() {
        return this.hasOne('App/Models/Fatura')
    }

    user() {
        return this.belongsTo('App/Models/User')
    }

    crianca() {
        return this.belongsTo('App/Models/Crianca')
    }
}

module.exports = Consulta
