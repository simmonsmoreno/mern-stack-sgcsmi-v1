import React, { Component } from 'react'
import { format, register } from 'timeago.js';

import NavBar from '../../Layouts/Navbar';
import Sidebar from '../../Layouts/Sidebar';
import PageHeader from '../../Layouts/PageHeader';

import Ativities from './Ativities';
import Info from './Info';
import Settings from './Settings';
import FileUpload from './FileUpload';

import api from '../../../../services/api'
import localeFunc from './../../timeago.ts'


export default class UserProfile extends Component {

    state = {
        crianca: {}
    }

    async componentDidMount() {
        const res = await api.get('/criancas/' + this.props.match.params.id);
        this.setState({ crianca: res.data })

    }

    render() {

        register('my-locale', localeFunc)

        return (
            <div>
                <NavBar />
                <Sidebar />
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <PageHeader title={'Perfil'} subtitle={'Criancas'} />
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">

                                    {/* Profile Image */}
                                    <div className="card card-primary card-outline">
                                        <div className="card-body box-profile">
                                            <div className="text-center">
                                                <img className="profile-user-img img-fluid img-circle elevation-2"
                                                    src={this.state.crianca.url}
                                                    alt="User profile pic"
                                                    style={{ width: 150, height: 150, }} />
                                            </div>

                                            <h3 className="profile-username text-center"> {this.state.crianca.firstname} </h3>
                                            
                                            <h3 className="profile-username text-center text-success">{format(this.state.crianca.dob, 'my-locale')}</h3>

                                            <p className="text-muted text-center"> BI: {this.state.crianca.cni} </p>


                                            <button className="btn btn-primary btn-block"
                                                data-toggle="modal" data-target=".bd-example-modal-lg">
                                                Alterar Fotografia
                                            </button>

                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}

                                </div>
                                {/* /.col */}
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-header p-2">
                                            <ul className="nav nav-pills">
                                                <li className="nav-item"><a className="nav-link active" href="#info" data-toggle="tab">Sobre</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#activity" data-toggle="tab">Atividades</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Definições</a></li>
                                            </ul>
                                        </div>{/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="active tab-pane" id="info">
                                                    <Info crianca={this.state.crianca} />
                                                </div>

                                                <div className="tab-pane" id="activity">
                                                    <Ativities crianca={this.state.crianca} />
                                                </div>

                                                {/* /.tab-pane */}

                                                <div className="tab-pane" id="settings">
                                                    <Settings crianca={this.state.crianca} />
                                                </div>
                                                {/* /.tab-pane */}
                                            </div>
                                            {/* /.tab-content */}
                                        </div>{/* /.card-body */}
                                    </div>
                                    {/* /.nav-tabs-custom */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* ADD A NEW USER */}
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Carregar uma nova fotografia</h3>
                                    <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <FileUpload crianca={this.state.crianca} />
                                </div>
                                {/* CARD-FOOTER */}
                                <div className="card-footer">
                                    <div className="row">
                                        <button className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.ADD A NEW USER*/}
            </div >
        )
    }
}
