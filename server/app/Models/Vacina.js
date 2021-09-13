'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vacina extends Model {

	doses() {
        return this.hasMany('App/Models/Dose')
    }
}

module.exports = Vacina
