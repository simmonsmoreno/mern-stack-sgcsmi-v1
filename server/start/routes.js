'use strict'

const Route = use('Route')

// AUTHENTICATION
Route.post('sgcsmi/api/signup', 'AuthController.register')
Route.post('sgcsmi/api/signin', 'AuthController.authenticate')
Route.get('sgcsmi/api/logs', 'AuthController.logs')

// USUARIOS
Route.resource('sgcsmi/api/users', 'UserController')
    .apiOnly()
    .middleware('auth')

Route.put('sgcsmi/api/users/password/:id', 'UserController.updatePassword').middleware('auth')
Route.put('sgcsmi/api/users/password/reset/:id', 'UserController.resetPassword').middleware('auth')
Route.post('sgcsmi/api/users/upload/:id', 'UserController.uploadPhoto').middleware('auth')
Route.get('sgcsmi/api/users/medico/disponivel/:data/:hora', 'UserController.getDisponibilidade').middleware('auth')

// CRIANCAS
Route.resource('sgcsmi/api/criancas', 'CriancaController')
    .apiOnly()
    .middleware('auth')

Route.post('sgcsmi/api/childrens/upload/:id', 'CriancaController.uploadPhoto').middleware('auth')
Route.post('sgcsmi/api/criancas/parents/:id', 'CriancaController.storeParents').middleware('auth')
Route.get('sgcsmi/api/criancas/parents/crianca/:id', 'CriancaController.showByParentsId').middleware('auth')

// CONSULTAS
Route.resource('sgcsmi/api/consultas', 'ConsultaController')
    .apiOnly()
    .middleware('auth')

Route.put('sgcsmi/api/consultar/:id', 'ConsultaController.consultar').middleware('auth')
Route.get('sgcsmi/api/consulta/hoje', 'ConsultaController.consultasHoje').middleware('auth')

// GLOBAL
Route.get('sgcsmi/api/photo/:photo', 'AuthController.showPhoto')