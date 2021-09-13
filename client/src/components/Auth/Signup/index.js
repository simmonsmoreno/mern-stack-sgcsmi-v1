import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { RadioGroup, Radio } from 'react-radio-group';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { StyledSelectDatepicker, DateContainer } from './styles'

import { registerUser } from "../../../services/actions/authActions";

import Footer from '../_partials/Footer'
import Header from '../_partials/Header'

class Register extends Component {

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

        this.props.registerUser(newUser, this.props.history);

    }

    render() {
        return (
            <div className="container">
                <Header title={'Registar'} />
                <p className="text-center text-secondary">
                    Já possui uma conta? <Link to="/login" className="text-primary"> Login</Link>
                </p>

                {/* {
                    this.state.errors &&
                    <p className="text-center text-danger">{this.state.errors}</p>
                } */}

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form onSubmit={this.onSubmit}>
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
                            </div>

                            <div className="form-row">
                                <div className="col offset-md-1 mt-5">
                                    {/* <!-- tipo utilizador options --> */}
                                    <RadioGroup
                                        name="Tipo"
                                        selectedValue={this.state.type}
                                        onChange={this.onChangeTypeRadio}>
                                        <Radio className="mx-2" value="Médico" />Médico
                                        <Radio className="mx-2" value="Enfermeiro" />Enfermeiro
                                        <Radio className="mx-2" value="Recepcionista" />Recepcionista
                                        <Radio className="mx-2" value="Administrador" />Administrador
                                    </RadioGroup>
                                </div>

                            </div>
                            <hr className="mb-4" />

                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Registar
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));