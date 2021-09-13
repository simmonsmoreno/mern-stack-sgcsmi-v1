'use strict'

const Model = use('Model')
const Hash = use('Hash')
const Env = use('Env')

class User extends Model {

    static boot() {

        super.boot()

        this.addHook('beforeSave', async (userInstance) => {
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.password)
            }
        })
    }

    static get hidden() {
        return ['password']
    }

    static get computed() {
        return ['fullname', 'url']
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

    tokens() {
        return this.hasMany('App/Models/Token')
    }

    criancas() {
        return this.belongsToMany('App/Models/Crianca')
    }

    consultas() {
        return this.hasMany('App/Models/Consulta')
    }
}

module.exports = User
