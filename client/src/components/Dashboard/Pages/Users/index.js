import React, { Component } from "react";
import { Link } from 'react-router-dom';

import NavBar from '../../Layouts/Navbar';
import Sidebar from '../../Layouts/Sidebar';
import PageHeader from '../../Layouts/PageHeader';
import AddUser from './AddUser';

import api from '../../../../services/api'

class Users extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await api.get('/users');
        this.setState({ users: res.data });
    }

    deleteUser = async (userId) => {

        const response = window.confirm('Este utilizador será removido do sistema. Proceder?');
        if (response) {
            await api.delete(`/users/${userId}`);
            this.getUsers();
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Sidebar />
                <div className="content-wrapper">
                    <PageHeader title={'Usuários'} subtitle={''} />
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col">
                                <div className="float-sm-right">
                                    <Link className="btn btn-outline-success" to=""
                                        data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <i className="fas fa-user-plus mx-2"> </i>
                                     Registar Novo Utilizador
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.content-header */}

                    {/*  Main content */}
                    <section className="content">

                        {/* ALERTS SECTION */}
                        {/* END ALERTS SECTION */}

                        {/* TABLE */}
                        <div className="card card-solid">
                            <div className="card-body pb-0">
                                <div className="row d-flex align-items-stretch justify-content-center" >
                                    <div className="row align-items-stretch justify-content-center">
                                        <div className="mb-4 col-auto">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to="" className="btn btn-default">Médicos</Link>
                                                <Link to="" className="btn btn-default">Enfermeiros</Link>
                                                <Link to="" className="btn btn-default">Recepcionistas</Link>
                                                <Link to="" className="btn btn-default">Pais</Link>
                                            </div>
                                        </div>
                                        <div className="col-auto table-responsive-sm">
                                            <table id="example2" className="text-sm table table-hover dataTable dtr-inline col table-sm" role="grid" >
                                                <thead>
                                                    <tr class="table-primary" role="row">
                                                        <th rowSpan="1" colSpan="1">Bilhete Identidade</th>
                                                        <th rowSpan="1" colSpan="1">Nome</th>
                                                        <th rowSpan="1" colSpan="1">Apelido</th>
                                                        <th rowSpan="1" colSpan="1">Email</th>
                                                        <th rowSpan="1" colSpan="1">Data de Nascimento</th>
                                                        <th rowSpan="1" colSpan="1">Morada</th>
                                                        <th rowSpan="1" colSpan="1">Telefone</th>
                                                        <th rowSpan="1" colSpan="1">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {

                                                        this.state.users.map(user => (
                                                            <tr role="row" key={user.id}>
                                                                <td className="text-primary"> {user.cni} </td>
                                                                <td> {user.firstname} </td>
                                                                <td> {user.lastname} </td>
                                                                <td> {user.email} </td>
                                                                <td> {new Date(user.dob).toLocaleDateString('pt', { year: 'numeric', month: 'numeric', day: 'numeric' })} </td>
                                                                <td> {user.address} </td>
                                                                <td> {user.phone} </td>
                                                                <td>
                                                                    <div className="text-right">
                                                                        <Link
                                                                            to={`/users/profile/${user.id}`}
                                                                            className="btn btn-sm btn-primary mr-2">
                                                                            <i className="fas fa-user"></i>
                                                                        </Link>
                                                                        <Link
                                                                            to="#"
                                                                            onClick={() => this.deleteUser(user.id)}
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

                    {/* ADD A NEW USER */}
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-lg">
                            <div className="modal-content">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Registar um novo utilizador</h3>
                                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <AddUser />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.ADD A NEW USER*/}
                </div>
            </div>
        );
    }
}


export default Users