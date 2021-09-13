'use strict'

const User = use("App/Models/User")
const Log = use('App/Models/Log')
const Helpers = use('Helpers')
const Hash = use('Hash')

class UserController {

    async index({ request, auth }) {

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Requisitou lista de usuarios'
        })

        return await User.all();
    }

    async show({ params, request, auth }) {

        const user = await User.findOrFail(params.id)
        await user.loadMany(['criancas', 'consultas.crianca'])

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Visualizou detalhes de um utilizador'
        })

        return user
    }

    async getDisponibilidade({ params, request, auth }) {

        const medicoDisp = await User
            .query()
            .where('cargo', 'medico')
            .whereDoesntHave('consultas', (builder) => {
                builder.where('data', params.data),
                builder.where('hora', params.hora)
            }).fetch()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Verificou disponibilidade de medicos'
        })

        return medicoDisp
    }

    async update({ params, request, auth }) {

        const user = await User.findOrFail(params.id)

        const data = request.only([
            "cni",
            "firstname",
            "lastname",
            "password",
            "cargo",
            "phone",
            "address"
        ])

        user.merge(data)
        await user.save()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Atualizou dados de um utilizador'
        })

        return user
    }

    async updatePassword({ request, params, response, auth }) {

        const user = await User.findOrFail(params.id)

        const { password, newPassword, confirmPassword } = request.all()

        if (newPassword === confirmPassword) {

            const verifyPassword = await Hash.verify(password, user.password)

            if (!verifyPassword) {
                return response.status(400).json({
                    error: 'Palavra-passe errada! Tente Novamente.'
                })
            }

            if (newPassword === password) {
                return response.status(400).json({
                    error: 'Nova palavra-passe igual a antiga. Tente Novamente'
                })
            }

            // hash and save new password
            // user.password = await Hash.make(newPassword)
            user.password = newPassword
            await user.save()

            await Log.create({
                url: request.url(),
                user_id: auth.user.id,
                user: auth.user.firstname,
                message: 'Alterou a sua pasword'
            })

            return response.json({
                status: 'success',
                message: 'Palavra-passe atualizada com sucesso!'
            })

        } else {
            return response.status(400).json({
                error: 'Nova palavra-passe não correspondem! Tente novamente.'
            })
        }
    }

    async resetPassword({ request, params, response, auth }) {

        const user = await User.findOrFail(params.id)

        const { password } = request.all()

        user.password = password
        await user.save()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Resetou a password'
        })

        return response.json({
            success: 'Palavra-passe resetado com sucesso!',
            user
        })
    }

    async uploadPhoto({ params, request, auth }) {

        const user = await User.findOrFail(params.id)

        const profilePic = request.file('photo', {
            types: ['image'],
            size: '2mb'
        })

        await profilePic.move(Helpers.tmpPath('uploads'), {
            name: `${new Date().getTime()}.${profilePic.subtype}`
        })

        if (!profilePic.moved()) {
            return profilePic.error()
        }

        user.photo = profilePic.fileName

        await user.save()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Atualizou seu fotografia'
        })

        return user
    }

    async destroy({ params, auth, response, request }) {

        const user = await User.findOrFail(params.id)

        if (user.id != auth.user.id && auth.user.cargo === 'admin') {

            await user.delete()

            await Log.create({
                url: request.url(),
                user_id: auth.user.id,
                user: auth.user.firstname,
                message: 'Removeu um utilizador'
            })

            return response.status(200).send({ sucess: 'User deleted sucessfully!' })

        } else {
            return response.status(401).send({ error: 'Not authorized' })
        }

    }
}

module.exports = UserController
