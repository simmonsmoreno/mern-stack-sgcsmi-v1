'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Crianca extends Model {

    static get computed() {
        return ['fullname','url']
    }
    
    getUrl({ photo }) {
        return `${Env.get('APP_URL')}/sgcsmi/api/photo/${photo}`
    }

    getFullname({ firstname, lastname }) {

        firstname = firstname.replace(/^(.)|\s(.)/g, ($1) => {
            return $1.toUpperCase()
        })

        lastname = lastname.replace(/^(.)|\s(.)/g, ($1) => {
            return $1.toUpperCase()
        })

        return `${firstname} ${lastname}`
    }

    users() {
        return this.belongsToMany('App/Models/User')
    }

    consultas() {
        return this.hasMany('App/Models/Consulta')
    }

    vacinas() {
        return this.hasMany('App/Models/Vacina')
    }

    crescimentos() {
        return this.hasMany('App/Models/Crescimento')
    }
}

module.exports = Crianca
