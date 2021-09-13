import React, { Component } from 'react'
import { RadioGroup, Radio } from 'react-radio-group';

import { StyledSelectDatepicker, DateContainer } from '../../../Auth/Signup/styles'

import api from '../../../../services/api'
import Password from './Password'
import { Link } from 'react-router-dom';

export default class Definicoes extends Component {

    state = {
        id: '',
        cni: '',
        firstname: '',
        lastname: '',
        email: '',
        dob: new Date(),
        sex: '',
        address: '',
        phone: '',
    }

    componentWillReceiveProps(user) {
        this.setState((state, user) => ({
            id: user.user.id,
            cni: user.user.cni,
            firstname: user.user.firstname,
            lastname: user.user.lastname,
            email: user.user.email,
            dob: user.user.dob,
            sex: user.user.sex,
            address: user.user.address,
            phone: user.user.phone,
        }))
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onChangeSexRadio = (value) => {
        this.setState({
            sex: value
        })
    }

    onDateChange = date => {
        this.setState({
            dob: date
        });
    };

    onSubmit = async e => {

        e.preventDefault();

        const userUpdate = {
            cni: this.state.cni,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            dob: this.state.dob,
            sex: this.state.sex,
            address: this.state.address,
            phone: this.state.phone,
        }

        await api.put(`/users/${this.state.id}`, userUpdate)

        window.location.href = '/users/profile/' + this.state.id;
    }

    render() {

        return (
            <div>
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Nome</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                placeholder="Nome"
                                onChange={this.onChange}
                                value={this.state.firstname}
                                required
                                autoFocus
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Apelido</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="lastname"
                                placeholder="Apelido"
                                onChange={this.onChange}
                                value={this.state.lastname}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Numero do BI</label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="cni"
                                placeholder="xx xx xx"
                                onChange={this.onChange}
                                value={this.state.cni}
                                max={999999}
                                min={100000}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="you@example.com"
                                onChange={this.onChange}
                                value={this.state.email}
                                required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-2 col-form-label">Data de Nascimento</label>
                        <div className="col-sm-10">
                            <div className="float-left form-control">
                                <DateContainer>
                                    <StyledSelectDatepicker
                                        id="dob"
                                        value={new Date(this.state.dob)}
                                        onDateChange={this.onDateChange}
                                        format={'day/month/year'}
                                    />
                                </DateContainer>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Sexo</label>
                        <div className="col-sm-10">
                            <RadioGroup
                                name="sex"
                                selectedValue={this.state.sex}
                                onChange={this.onChangeSexRadio}>
                                <Radio className="mx-2" value="Masculino" />Masculino
                                <Radio className="mx-2" value="Feminino" />Feminino
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Telefone</label>
                        <div className="col-sm-10">
                            <div className="input-group">
                                <div className="input-group-prepend"> <span className="input-group-text">(+238)</span> </div>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="phone"
                                    placeholder="999-99-99"
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Morada</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="1234 - Rua 1-F, Calabaceira, Praia"
                                onChange={this.onChange}
                                value={this.state.address}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col offset-sm-2">
                            <div className="col-sm">
                                <button type="submit" className="btn btn-success">Atualizar</button>
                            </div>
                        </div>
                        <div className="float-sm-right">
                            <Link className="btn btn-secondary" to=""
                                data-toggle="modal" data-target=".bd-example-modal-md">
                                <i className="fas fa-lock mx-2"> </i>
                                    Alterar Password
                            </Link>
                        </div>
                    </div>
                </form>

                <div className="modal fade bd-example-modal-md" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Atualizar Password</h3>
                                    <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <Password id={this.state.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
