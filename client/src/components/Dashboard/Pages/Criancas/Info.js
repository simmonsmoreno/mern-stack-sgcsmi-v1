import React, { Component } from 'react'

export default class Atividade extends Component {

    state = {
        crianca: {}
    }

    componentWillReceiveProps(crianca) {
        this.setState(crianca)
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
                            <p>Nome completo: <b className="text-primary">{this.state.crianca.firstname + " " + this.state.crianca.lastname}</b></p>
                            <p>Data de nascimento: <b className="text-primary">{new Date(this.state.crianca.dob).toLocaleDateString('pt', { year: 'numeric', month: 'long', day: 'numeric' })}</b></p>
                            <p>Sexo: <b className="text-primary">{this.state.crianca.sex}</b></p>
                            <p>Tipo de parto: <b className="text-primary">{this.state.crianca.t_parto}</b></p>
                            <p>Tempo de gestacao (semanas): <b className="text-primary">{this.state.crianca.t_gest} </b></p>
                            <p>Peso neonatal (kilogramas): <b className="text-primary">{this.state.crianca.b_weight} </b></p>
                            <p>Altura neonatal (centimetros): <b className="text-primary">{this.state.crianca.b_height} </b></p>
                            <p>Perimetro cefalico neonatal (centimetros): <b className="text-primary">{this.state.crianca.p_cef} </b></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card-header">
                            <h3> <i className="fas fa-child"></i> Pais</h3>
                        </div>

                        {/* {
                            this.state.crianca.users.map(parente => (
                                <div class="col-md-5 card-body" key={parente.id}>
                                    <div class="info-box">
                                        <span class="info-box-icon bg-info">
                                            <img src={parente.url} alt="..." />
                                        </span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">{parente.fullname}</span>
                                            <span class="info-box-number">{parente.cni}</span>
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
