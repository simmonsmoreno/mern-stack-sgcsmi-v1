import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { format, register } from 'timeago.js';

import NavBar from '../../Layouts/Navbar';
import Sidebar from '../../Layouts/Sidebar';
import PageHeader from '../../Layouts/PageHeader';

import api from '../../../../services/api'
import localeFunc from './../../timeago.ts'

class Criancas extends Component {

    state = {
        criancas: []
    }

    getUsers = async () => {
        const res = await api.get('/criancas');
        this.setState({ criancas: res.data });
    }

    async componentDidMount() {
        this.getUsers();
    }

    deleteUser = async (userId) => {

        const response = window.confirm('Este crianca será removido do sistema. Proceder?');
        if (response) {
            await api.delete(`/criancas/${userId}`);
            this.getUsers();
        }
    }

    render() {

        register('my-locale', localeFunc)

        return (
            <div>
                <NavBar />
                <Sidebar />
                <div className="content-wrapper">
                    <PageHeader title={'Criancas'} subtitle={''} />
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm">
                                <div className="float-sm-right">
                                    <Link className="btn btn-outline-success" to="/criancas/registar">
                                        <i className="fas fa-user-plus mx-2"> </i>
                                     Registar
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Main content */}
                    <section className="content">

                        {/* ALERTS SECTION */}
                        {/* END ALERTS SECTION */}

                        {/* TABLE */}
                        <div className="card card-solid">
                            <div className="card-body pb-0">
                                <div className="row d-flex align-items-stretch justify-content-center" >
                                    <div className="row">
                                        <div className="col-auto table-responsive-sm">
                                            <table id="example2" className="text-sm table table-bordered table-hover dataTable dtr-inline col table-sm" role="grid" >
                                                <thead>
                                                    <tr class="table-primary" role="row">
                                                        <th rowSpan="1" colSpan="1">Bilhete Identidade</th>
                                                        <th rowSpan="1" colSpan="1">Nome</th>
                                                        <th rowSpan="1" colSpan="1">Apelido</th>
                                                        <th rowSpan="1" colSpan="1">Idade</th>
                                                        <th rowSpan="1" colSpan="1">Sexo</th>
                                                        <th rowSpan="1" colSpan="1">Tempo Gestação</th>
                                                        <th rowSpan="1" colSpan="1">Peso</th>
                                                        <th rowSpan="1" colSpan="1">Altura</th>
                                                        <th rowSpan="1" colSpan="1">Cabeça</th>
                                                        <th rowSpan="1" colSpan="1">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {

                                                        this.state.criancas.map(cr => (
                                                            <tr role="row" key={cr.id}>
                                                                <td className="text-primary"> {cr.cni} </td>
                                                                <td> {cr.firstname} </td>
                                                                <td> {cr.lastname} </td>
                                                                <td> {format(cr.dob, 'my-locale')} </td>
                                                                <td> {cr.sex} </td>
                                                                <td> {cr.t_gest} </td>
                                                                <td> {cr.b_weight} </td>
                                                                <td> {cr.b_height} </td>
                                                                <td> {cr.p_cef} </td>
                                                                <td>
                                                                    <div className="text-right">
                                                                        <Link
                                                                            to={`/criancas/profile/${cr.id}`}
                                                                            className="btn btn-sm btn-primary mr-2">
                                                                            <i className="fas fa-user"></i>
                                                                        </Link>
                                                                        <Link
                                                                            to="#"
                                                                            onClick={() => this.deleteUser(cr.id)}
                                                                            className="btn btn-sm bg-danger">
                                                                            <i className="fas fa-trash"></i>
                                                                        </Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))

                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Criancas;