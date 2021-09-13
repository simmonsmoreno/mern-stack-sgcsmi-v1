import React, { Component } from 'react'
import { RadioGroup, Radio } from 'react-radio-group';

import { StyledSelectDatepicker, DateContainer } from '../../../Auth/Signup/styles'

import api from '../../../../services/api'

export default class Definicoes extends Component {

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
        p_cef: 40
    }

    componentWillReceiveProps(crianca) {
        this.setState((state, crianca) => ({
            id: crianca.crianca.id,
            cni: crianca.crianca.cni,
            firstname: crianca.crianca.firstname,
            lastname: crianca.crianca.lastname,
            dob: crianca.crianca.dob,
            sex: crianca.crianca.sex,
            t_parto: crianca.crianca.t_parto,
            t_gest: crianca.crianca.t_gest,
            b_weight: crianca.crianca.b_weight,
            b_height: crianca.crianca.b_height,
            p_cef: crianca.crianca.p_cef,
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

        const updateCrianca = {
            cni: this.state.cni,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            dob: this.state.dob,
            sex: this.state.sex,
            t_parto: this.state.t_parto,
            t_gest: this.state.t_gest,
            b_weight: this.state.b_weight,
            b_height: this.state.b_height,
            p_cef: this.state.p_cef
        }

        await api.put(`/criancas/${this.state.id}`, updateCrianca)

        window.location.href = '/criancas/profile/' + this.state.id;
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
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Tipo de parto</label>
                        <div className="col-sm-10">
                            <RadioGroup
                                name="t_parto"
                                selectedValue={this.state.t_parto}
                                onChange={this.onChangeTPRadio}>
                                <Radio className="mx-2" value="Normal" />Normal
                                <Radio className="mx-2" value="Cesariana" />Cesariana
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Tempo de gestação</label>
                        <div className="col-sm-10">
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
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Peso a nascenca</label>
                        <div className="col-sm-10">
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
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Altura a nascenca</label>
                        <div className="col-sm-10">
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
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Perimetro cefalico</label>
                        <div className="col-sm-10">
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

                    <div className="form-group row">
                        <div className="col offset-sm-2">
                            <div className="col-sm">
                                <button type="submit" className="btn btn-success">Atualizar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}
