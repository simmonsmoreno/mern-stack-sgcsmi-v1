import React, { Component } from 'react'

import api from '../../../../services/api'

export default class Password extends Component {

    state = {
        id: '',
        password: '',
        newPassword: '',
        confirmPassword: ''
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    componentWillReceiveProps(id) {
        this.setState({
            id: id.id
        })
    }

    onSubmit = async e => {
        e.preventDefault()

        if (this.state.newPassword !== this.state.confirmPassword) {
            window.alert('Palavra passe não coincidem')
        } else {
            const res = await api.put(`/users/password/${this.state.id}`, this.state)

            if (res.data.status === "success") {
                window.location.href = '/users/profile/' + this.state.id;
            } else {
                window.alert('Palavra Passe Incorreta')
            }

        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* CARD-BODY */}
                    <div className="card-body">
                        <div className="form-row my-3">
                            <div className="col">
                                <label htmlFor="password">Antiga</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                />
                            </div>
                        </div>
                        <div className="form-row my-3">
                            <div className="col">
                                <label htmlFor="password2">Nova</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    onChange={this.onChange}
                                    value={this.state.newPassword}
                                />
                            </div>
                        </div>
                        <div className="form-row my-3">
                            <div className="col">
                                <label htmlFor="password2">Confirmar</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    onChange={this.onChange}
                                    value={this.state.confirmPassword}
                                />
                            </div>
                        </div>
                    </div>
                    {/* CARD-FOOTER */}
                    <div className="card-footer">
                        <div className="row">
                            <button type="submit" className="btn btn-primary mr-2">
                                Atualizar
                            </button>
                            <button className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
