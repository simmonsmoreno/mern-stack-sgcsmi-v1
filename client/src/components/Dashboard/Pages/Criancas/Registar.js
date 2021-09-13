import React, { Component } from "react";
import { RadioGroup, Radio } from 'react-radio-group';

import NavBar from '../../Layouts/Navbar';
import Sidebar from '../../Layouts/Sidebar';
import PageHeader from '../../Layouts/PageHeader';


import { StyledSelectDatepicker, DateContainer } from '../../../Auth/Signup/styles'

import api from '../../../../services/api'

export default class Registar extends Component {

    state = {
        cni: '',
        firstname: '',
        lastname: '',
        dob: new Date(),
        sex: 'Masculino',
        t_parto: 'Normal',
        t_gest: 38,
        b_weight: 3.5,
        b_height: 55,
        p_cef: 40,
        p_cni: '',
        p_firstname: '',
        p_lastname: '',
        p_email: '',
        p_address: '',
        p_phone: '',
        m_cni: '',
        m_firstname: '',
        m_lastname: '',
        m_email: '',
        m_address: '',
        m_phone: ''
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onChangeSexRadio = (value) => {
        this.setState({
            sex: value
        })
    }

    onChangeTPRadio = (value) => {
        this.setState({
            t_parto: value
        })
    }

    onDateChange = date => {
        this.setState({
            dob: date
        });
    };

    onSubmit = async e => {

        e.preventDefault();

        var res

        res =  await api.post('/signup', {
            cni: this.state.p_cni,
            firstname: this.state.p_firstname,
            lastname: this.state.p_lastname,
            email: this.state.p_email,
            sex: 'Masculino',
            type: 'Parente',
            address: this.state.p_address,
            phone: this.state.p_phone,
        })

        const pai = res.data

        res = await api.post('/signup', {
            cni: this.state.m_cni,
            firstname: this.state.m_firstname,
            lastname: this.state.m_lastname,
            email: this.state.m_email,
            sex: 'Feminino',
            type: 'Parente',
            address: this.state.m_address,
            phone: this.state.m_phone,
        })

        const mae = res.data

        res = await api.post('/criancas', {
            cni: this.state.cni,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            dob: this.state.dob,
            sex: this.state.sex,
            t_parto: this.state.t_parto,
            t_gest: this.state.t_gest,
            b_weight: this.state.b_weight,
            b_height: this.state.b_height,
            p_cef: this.state.p_cef,
            pais: [pai.id, mae.id]
        })

        console.log(res.data)

        window.location.href = '/criancas';

    }

    render() {
        return (
            <div>
                <NavBar />
                <Sidebar />
                <div className="content-wrapper">
                    <PageHeader title={'Registar'} subtitle={'Criancas'} />
                    {/*  Main content */}
                    <section className="content">

                        {/* ALERTS SECTION */}
                        {/* END ALERTS SECTION */}
                        <div className="row">
                            <div className="col-md-10 offset-1 card card-body">
                                <form onSubmit={this.onSubmit}>
                                    Dados da Crianca:
                                    {/* <!-- Nome e BI input --> */}
                                    <div className="form-row my-3">
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
                                                autoFocus
                                                required />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="firstname">Nome</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstname"
                                                placeholder="Nome"
                                                value={this.state.firstname}
                                                onChange={this.onChange}
                                                required
                                            />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="lastname">Apelido</label>
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
                                    <div className="form-row my-3">
                                        <div className="col mt-2">
                                            <DateContainer>
                                                <StyledSelectDatepicker
                                                    value={this.state.dob}
                                                    onDateChange={this.onDateChange}
                                                    format={'day/month/year'}
                                                />
                                            </DateContainer>
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="sex">Sexo</label>
                                            <RadioGroup
                                                name="sex"
                                                selectedValue={this.state.sex}
                                                onChange={this.onChangeSexRadio}>
                                                <Radio className="mx-2" value="Masculino" />Masculino
                                                <Radio className="mx-2" value="Feminino" />Feminino
                                            </RadioGroup>
                                        </div>
                                        <div className="col my-2">
                                            <label htmlFor="t_parto">Tipo de Parto</label>
                                            <RadioGroup
                                                name="t_parto"
                                                selectedValue={this.state.t_parto}
                                                onChange={this.onChangeTPRadio}>
                                                <Radio className="mx-2" value="Normal" />Normal
                                                <Radio className="mx-2" value="Cesariana" />Cesariana
                                            </RadioGroup>
                                        </div>
                                    </div>

                                    <div className="form-row my-3">
                                        <div className="col mb-3">
                                            <label htmlFor="t_gest">Tempo de Gestacao</label>
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    id="t_gest"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.t_gest}
                                                />
                                                <div className="input-group-prepend"> <span className="input-group-text">sem</span> </div>
                                            </div>
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="b_weight">Peso Nasc.</label>
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    id="b_weight"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.b_weight}
                                                />
                                                <div className="input-group-prepend"> <span className="input-group-text">kg</span> </div>
                                            </div>
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="b_height">Altura Nasc.</label>
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    id="b_height"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.b_height}
                                                />
                                                <div className="input-group-prepend"> <span className="input-group-text">cm</span> </div>
                                            </div>
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="p_cef">Perimetro Cef. Nasc.</label>
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    id="p_cef"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.p_cef}
                                                />
                                                <div className="input-group-prepend"> <span className="input-group-text">cm</span> </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    Dados do Pai:
                                    <div className="form-row my-3">
                                        <div className="col mb-3">
                                            <label htmlFor="p_firstname">Nome</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="p_firstname"
                                                placeholder="Nome"
                                                onChange={this.onChange}
                                                value={this.state.p_firstname}
                                                required
                                            />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="p_lastname">Apelido</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="p_lastname"
                                                placeholder="Apelido"
                                                onChange={this.onChange}
                                                value={this.state.p_lastname}
                                                required
                                            />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="p_cni">BI</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="p_cni"
                                                placeholder="xx xx xx"
                                                onChange={this.onChange}
                                                value={this.state.p_cni}
                                                max={999999}
                                                min={100000}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row my-3">
                                        <div className="col">
                                            <label htmlFor="p_email">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="p_email"
                                                placeholder="you@example.com"
                                                onChange={this.onChange}
                                                value={this.state.p_email}
                                                required />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="p_phone">Telefone</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text">(+238)</span> </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="p_phone"
                                                    placeholder="999-99-99"
                                                    onChange={this.onChange}
                                                    value={this.state.p_phone}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="p_address">Morada</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="p_address"
                                                placeholder="Calabaceira, Praia"
                                                onChange={this.onChange}
                                                value={this.state.p_address}
                                            />
                                        </div>
                                    </div>

                                    <hr />

                                    Dados do Mae:
                                    <div className="form-row my-3">
                                        <div className="col mb-3">
                                            <label htmlFor="m_firstname">Nome</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="m_firstname"
                                                placeholder="Nome"
                                                onChange={this.onChange}
                                                value={this.state.m_firstname}
                                                required
                                            />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="m_lastname">Apelido</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="m_lastname"
                                                placeholder="Apelido"
                                                onChange={this.onChange}
                                                value={this.state.m_lastname}
                                                required
                                            />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="m_cni">BI</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="m_cni"
                                                placeholder="xx xx xx"
                                                onChange={this.onChange}
                                                value={this.state.m_cni}
                                                max={999999}
                                                min={100000}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row my-3">
                                        <div className="col">
                                            <label htmlFor="m_email">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="m_email"
                                                placeholder="you@example.com"
                                                onChange={this.onChange}
                                                value={this.state.m_email}
                                                required />
                                        </div>
                                        <div className="col mb-3">
                                            <label htmlFor="m_phone">Telefone</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text">(+238)</span> </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="m_phone"
                                                    placeholder="999-99-99"
                                                    onChange={this.onChange}
                                                    value={this.state.m_phone}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="m_address">Morada</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="m_address"
                                                placeholder="Calabaceira, Praia"
                                                onChange={this.onChange}
                                                value={this.state.m_address}
                                            />
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                                        Registar Crianca
                                    </button>
                                </form>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        );
    }

}
