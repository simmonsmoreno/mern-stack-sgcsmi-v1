'use strict'

const Crianca = use("App/Models/Crianca")
const Vacina = use("App/Models/Vacina")
const Dose = use("App/Models/Dose")
const User = use("App/Models/User")
const Log = use('App/Models/Log')
const Helpers = use('Helpers')

class CriancaController {

    async index({ request, auth }) {

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Requisitou lista de criancas'
        })

        return await Crianca.all()
    }

    async store({ request, auth }) {

        const data = request.only([
            'cni',
            'firstname',
            'lastname',
            'dob',
            'sex',
            'address',
            'tgestac',
            'tparto',
            'pesonasc',
            'altnasc',
            'perimnasc'
        ])

        if (data.firstname.endsWith("a") || data.firstname.endsWith("e")) data.photo = "avatar-1.jpg"
        else data.photo = "avatar-2.jpg"

        const crianca = await Crianca.create(data)

        const vacinasData = [
            { crianca_id: crianca.id, designacao: 'BGC', descricao: 'contra Tuberculose' },
            { crianca_id: crianca.id, designacao: 'Anti Hepatite B', descricao: 'nas primeiras 12 horas ou antes de 24 horas' },
            { crianca_id: crianca.id, designacao: 'Anti Hepatite B', descricao: 'após 24 horas' },
            { crianca_id: crianca.id, designacao: 'VPO', descricao: 'Vacina Oral contra Poliomielite ou Paralisía Infantil' },
            { crianca_id: crianca.id, designacao: 'VPI', descricao: 'Vacina injetável contra Poliomielite ou Paralisía Infantil' },
            { crianca_id: crianca.id, designacao: 'Pentavalente', descricao: 'contra Diferia, Tétano, Pertussis, Hemophilus Inf. B, Hepatite B' },
            { crianca_id: crianca.id, designacao: 'Tríplice Viral', descricao: 'contra a Parotidite, Rubéola, Sarampo' },
            { crianca_id: crianca.id, designacao: 'Febre Amarela', descricao: ' ' },
            { crianca_id: crianca.id, designacao: 'Td', descricao: 'Tétano e Diferia' },
            { crianca_id: crianca.id, designacao: 'HPV', descricao: 'contra Papiloma Vírus' },
        ]

        const vacinas = await Vacina.createMany(vacinasData)

        const doses = []

        vacinas.forEach(vacina => {
            let newDoses = [
                { vacina_id: vacina.id, designacao: '1º dose', descricao: ' ' },
                { vacina_id: vacina.id, designacao: '2º dose', descricao: ' ' },
                { vacina_id: vacina.id, designacao: '3º dose', descricao: ' ' },
                { vacina_id: vacina.id, designacao: 'reforco', descricao: ' ' },
                { vacina_id: vacina.id, designacao: 'dose extra', descricao: ' ' }
            ]

            newDoses.forEach(newDose => doses.push(newDose))
        });

        await Dose.createMany(doses)

        await crianca.load('vacinas.doses')

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Registou uma nova crianca'
        })

        return {
            mensagem: 'Crianca Registado com Sucesso!',
            crianca
        }
    }

    async storeParents({ params, request, auth }) {

        const data = request.only([
            "cni",
            "firstname",
            "lastname",
            "password",
            "address",
            "phone"
        ])

        data.cargo = "pais"

        if (data.firstname.endsWith("a") || data.firstname.endsWith("e")) {
            data.photo = "avatar-1.jpg"
        } else {
            data.photo = "avatar-2.jpg"
        }

        const parente = await User.create(data)

        await parente.criancas().attach(params.id)

        await parente.load('criancas')

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Registou parentes de uma crianca'
        })

        return parente;

    }

    async showByParentsId({ params, request, auth }){

        const user = await User.findOrFail(params.id)
        await user.loadMany(['criancas.users','criancas.crescimentos', 'criancas.vacinas.doses', 'criancas.consultas'])

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Requisitou lista de crianca de um parente'
        })

        return user
    }

    async show({ params, request, auth }) {

        const crianca = await Crianca.findOrFail(params.id)

        await crianca.loadMany(['users', 'consultas', 'crescimentos', 'vacinas.doses'])

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Visualizou detalhes de uma crianca'
        })

        return crianca
    }

    async update({ params, request, auth }) {

        const crianca = await Crianca.findOrFail(params.id)

        const data = request.only([
            'cni',
            'firstname',
            'lastname',
            'dob',
            'sex',
            'address',
            'tgestac',
            'tparto',
            'pesonasc',
            'altnasc',
            'perimnasc',
        ])

        crianca.merge(data)

        await crianca.save()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Atualizou dados de uma crianca'
        })

        return {
            mensagem: 'Crianca Atualizado com Sucesso!',
            crianca
        }
    }

    async destroy({ params, response, auth }) {

        const crianca = await Crianca.findOrFail(params.id)

        await crianca.delete()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Removeu uma crianca'
        })

        return response.status(200).send({ success: 'Children deleted sucessfully!' })
    }

    async uploadPhoto({ params, request, auth }) {

        console.log(params)
        const crianca = await Crianca.findOrFail(params.id)

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

        crianca.photo = profilePic.fileName

        await crianca.save()

        await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Atualizou foto de uma crianca'
        })

        return crianca
    }
}

module.exports = CriancaController