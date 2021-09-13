import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="py-5 text-center">
                <div className="col-md-4 offset-md-4">
                    <img className="mb-4" src={'/dist/img/logo.png'} alt="" width="150" height="150" />
                    <h6 className="text-muted mb-4" id="text-brand">Sistema de Gestão de Centros de Saúde Materno Infantil</h6>
                </div>
                <h2 className="h3 mb-3 font-weight-normal">{this.props.title}</h2>
            </div>
        )
    }
}
