'use strict'

const Crescimento = use("App/Models/Crescimento")
const Consulta = use("App/Models/Consulta")
const Vacina = use("App/Models/Vacina")
const Dose = use("App/Models/Dose")
const User = use("App/Models/User")
const Log = use('App/Models/Log')

class ConsultaController {

  // show a list of all consultas.
  async index({ request, auth }) {

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Requisitou lista de consultas'
    })

    return await Consulta.query()
      .with('user')
      .with('crianca')
      .fetch()
  }

  async consultasHoje({ request, auth }) {

    const hoje = new Date().toISOString().split('T')[0]

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Requisitou lista de consultas'
        })

    return await Consulta.query()
      .with('user')
      .with('crianca')
      .where('data', hoje)
      .fetch()
  }

  // create/save a new consulta.
  async store({ request, auth }) {

    const data = request.only([
      'data',
      'hora',
      'tipo',
      'descricao',
      'user_id',
      'crianca_id',
    ])

    const consulta = await Consulta.create(data)

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Criou uma nova consulta'
        })

    return consulta;
  }

  // display a single consulta.
  async show({ params, request, auth }) {

    const consulta = await Consulta.findOrFail(params.id)
    await consulta.loadMany(['user', 'crianca.crescimentos', 'crianca.vacinas.doses'])

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Visualizou detalhes de uma consulta'
        })

    return consulta
  }

  // Update consulta details.
  async update({ params, request, auth }) {

    const consulta = await Consulta.findOrFail(params.id)

    const data = request.only([
      'data',
      'hora',
      'tipo',
      'descricao',
      'user_id',
      'crianca_id'
    ])

    consulta.merge(data)
    await consulta.save()

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Atualizou dados de uma consulta'
        })

    return consulta
  }

  // Delete a consulta with id.
  async destroy({ params, response, request, auth }) {

    const consulta = await Consulta.findOrFail(params.id)

    console.log(consulta)

    await consulta.delete()

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Removeu uma consulta'
        })

    return response.status(200).send({ sucess: 'Consulta removido com sucesso!' })
  }

  // Consultar
  async consultar({ params, request, auth }) {

    await Consulta.query().where('id', params.id).update({ efetuado: true })

    const consulta = await Consulta.findOrFail(params.id)

    const { ids, ...dataCresc } = request.only([
      'peso',
      'altura',
      'perimcef',
      'orofaringe',
      'foop',
      'torax',
      'respiratorio',
      'abdomen',
      'anca',
      'pele',
      'reflexos',
      'ids'
    ])

    dataCresc.crianca_id = consulta.crianca_id

    for (let i = 0; i<ids.length ; i++) {
          await Dose.query().where('id', ids[i]).update({ estado: true })
    }

    await Crescimento.create(dataCresc)

    await Log.create({
            url: request.url(),
            user_id: auth.user.id,
            user: auth.user.firstname,
            message: 'Realizou uma consulta'
        })

    return { mensagem: 'Consulta realizada!' }
  }
}

module.exports = ConsultaController
