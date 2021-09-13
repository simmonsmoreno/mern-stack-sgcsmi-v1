import React, { Component } from "react";
import { RadioGroup, Radio } from 'react-radio-group';

import { StyledSelectDatepicker, DateContainer } from '../../../Auth/Signup/styles'
import api from '../../../../services/api';

export default class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cni: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password2: '',
            dob: new Date(),
            sex: 'Masculino',
            type: 'Parente',
            address: '',
            phone: '',
            // errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onChangeSexRadio = (value) => {
        this.setState({
            sex: value
        })
    }

    onChangeTypeRadio = (value) => {
        this.setState({
            type: value
        })
    }

    onDateChange = date => {
        this.setState({
            dob: date
        });
    };

    onSubmit = async e => {

        e.preventDefault();

        const newUser = {
            cni: this.state.cni,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            dob: this.state.dob,
            sex: this.state.sex,
            type: this.state.type,
            address: this.state.address,
            phone: this.state.phone,
        }

        api.post('/signup', newUser)

        window.location.href = '/users';

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* CARD-BODY */}
                    <div className="card-body">
                        {/* <!-- Nome e BI input --> */}
                        <div className="form-row my-3">
                            <div className="col mb-3">
                                <label htmlFor="name">Nome</label>
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
                            <div className="col mb-3">
                                <label htmlFor="name">Apelido</label>
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
                            <div className="col mb-3">
                                <label htmlFor="codigo">BI</label>
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

                        {/* <!-- email e data nascimento input --> */}
                        <div className="form-row my-3">
                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="you@example.com"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    required />
                            </div>
                            <div className="col mt-2">
                                <DateContainer>
                                    <StyledSelectDatepicker
                                        value={this.state.dob}
                                        onDateChange={this.onDateChange}
                                        format={'day/month/year'}
                                    />
                                </DateContainer>
                            </div>
                        </div>

                        {/* <!-- password e sexo input --> */}
                        <div className="form-row my-3">
                            <div className="col">
                                <label htmlFor="password">Palavra-passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Palavra-passe"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                />
                            </div>
                            <div className="col-md-4 mt-5 offset-md-1 mb-2">
                                <RadioGroup
                                    name="Sexo"
                                    selectedValue={this.state.sex}
                                    onChange={this.onChangeSexRadio}>
                                    <Radio className="mx-2" value="Masculino" />Masculino
                                        <Radio className="mx-2" value="Feminino" />Feminino
                                    </RadioGroup>
                            </div>
                        </div>

                        {/* <!-- password2 e telefone input --> */}
                        <div className="form-row my-3">
                            <div className="col-md-7 mb-3">
                                <label htmlFor="password2">Confirmar</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password2"
                                    placeholder="Confirmar palavra-passe"
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                />
                            </div>
                            <div className="col-md-5 mb-3">
                                <label htmlFor="phone">Telefone</label>
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

                        {/* <!-- morada e tipo input --> */}
                        <div className="form-row mt-3">
                            <div className="col">
                                <label htmlFor="address">Morada</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="1234 - Rua 1-F, Calabaceira, Praia"
                                    onChange={this.onChange}
                                    value={this.state.address}
                                />
                            </div>
                            <div className="col">
                                {/* <!-- tipo utilizador options --> */}
                                <RadioGroup
                                    name="Tipo"
                                    selectedValue={this.state.type}
                                    onChange={this.onChangeTypeRadio}
                                >
                                    <Radio className="mx-2" value="Médico" />Médico
                                    <Radio className="mx-2" value="Enfermeiro" />Enfermeiro
                                    <Radio className="mx-2" value="Recepcionista" />Recepcionista
                                    <Radio className="mx-2" value="Administrador" />Administrador
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                    {/* CARD-FOOTER */}
                    <div className="card-footer">
                        <div className="row">
                            <button type="submit" className="btn btn-primary mr-2">
                                Registar
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
