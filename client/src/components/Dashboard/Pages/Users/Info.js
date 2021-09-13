import React, { Component } from 'react'

export default class Atividade extends Component {

    state = {
        user: {}
    }
    componentWillReceiveProps(user) {
        this.setState(user)
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="card-md-12">
                        <div className="card-header">
                            <h3> <i className="fas fa-info-circle"></i> Informações </h3>
                        </div>
                        <div className="card-body">
                            <p>Nome Completo: <b className="text-primary">{this.state.user.fullname}</b></p>
                            <p>Data de Nascimento: <b className="text-primary">{new Date(this.state.user.dob).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })}</b></p>
                            <p>Email: <b className="text-primary">{this.state.user.email}</b></p>
                            <p>Morada: <b className="text-primary">{this.state.user.address}</b></p>
                            <p>Contatos: <b className="text-primary">{this.state.user.phone}</b></p>
                            <p>Tipo: <b className="text-primary">{this.state.user.type}</b></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card-header">
                            <h3> <i className="fas fa-child"></i> Filho(s)</h3>
                        </div>

                        {/* {
                            this.state.user.criancas.map(crianca => (
                                <div class="col-md-5 card-body" key={crianca.id}>
                                    <div class="info-box">
                                        <span class="info-box-icon bg-info">
                                            <img src={crianca.url} alt="..."/>
                                        </span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">{crianca.fullname}</span>
                                            <span class="info-box-number">{crianca.cni}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}
