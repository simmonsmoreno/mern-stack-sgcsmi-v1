"use strict"

const User = use("App/Models/User")
const Log = use('App/Models/Log')
const Helpers = use('Helpers')

class AuthController {

    async register({ request }) {

        const data = request.only([
            "cni",
            "firstname",
            "lastname",
            "password",
            "cargo",
            "phone",
            "address"
        ])
    
        if (data.firstname.endsWith("a") || data.firstname.endsWith("e")) {
            data.photo = "avatar-1.jpg"
        } else {
            data.photo = "avatar-2.jpg"
        }

        const user = await User.create(data)

        const res = {
            message: 'Usuário criado com sucesso!',
            user
        }

        await Log.create({
            url: request.url(),
            user_id: user.id,
            user: user.firstname,
            message: 'Novo usuario adicionado ao sistema (admin)'
        })

        return res
    }

    async authenticate({ request, auth }) {

        const { cni, password } = request.all()

        const user = await auth.validate(cni, password, true)
        const token = await auth.generate(user, true, { expiresIn: '12000m'})

        await Log.create({
            url: request.url(),
            user_id: user.id,
            user: user.firstname,
            message: 'Login no sistema'
        })

        return token
    }

    async showPhoto({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.photo}`))
    }

    async logs() {
        return await Log.query()
          .orderBy('id', 'desc')
          .fetch()
    }
}

module.exports = AuthController
