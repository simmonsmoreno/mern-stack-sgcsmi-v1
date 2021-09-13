import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";

import api from '../../../services/api'

class Sidebar extends Component {

    state = {
        user: {},
        ative: 'home'
    }

    onChange = e => {
        console.log('here')
        this.setState({ ative: e.target.id })
    }

    componentDidMount = async () => {
        const user = await api.get(`/users/${this.props.auth.user.uid}`)
        this.setState({ user: user.data })

    }

    render() {

        var homeAtive = this.state.ative === "home"? 'ative' : ' '
        var usersAtive = this.state.ative === "utilizadores"? 'ative' : ' '
        var criancastive = this.state.ative === "criancas"? 'ative' : ' '
        var consultasAtive = this.state.ative === "consultas" ? 'ative' : ' '
        var reportsAtive = this.state.ative === "relatorios" ? 'ative' : ' '
        
        return (
            <div>
                {/* <!-- Main Sidebar Container --> */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* <!-- Brand Logo --> */}
                    <Link to="/dashboard" className="brand-link text-sm">
                        <img
                            src="/dist/img/logo.png"
                            alt="SGCSMI Logo"
                            className="brand-image img-circle"/>
                        <span className="brand-text font-weight-light">SGCSMI</span>
                    </Link>

                    {/* <!-- Sidebar --> */}
                    <div className="sidebar">
                        {/* <!-- Sidebar user panel (optional) --> */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src={this.state.user.url} className="img-circle elevation-2" alt="User foto"
                                />
                            </div>
                            <div className="info text-sm">
                                <Link to={`/users/profile/${this.state.user.id}`} className="d-block">{this.state.user.firstname}</Link>
                            </div>
                        </div>

                        {/* <!-- Sidebar Menu --> */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="home" onClick={this.onChange}>
                                <li className="nav-item">
                                    <Link to="/dashboard" className={"nav-link " + homeAtive}>
                                        <i className="nav-icon fas fa-home"></i>
                                        <p> Home </p>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="utilizadores" onClick={this.onChange}>
                                <li className="nav-item">
                                    <Link to="/users" className={"nav-link " + usersAtive}>
                                        <i className="nav-icon fas fa-users"></i>
                                        <p> Utilizadores </p>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="criancas" onClick={this.onChange}>
                                <li className="nav-item">
                                    <Link to="/criancas" className={"nav-link " + criancastive}>
                                        <i className="nav-icon fas fa-child"></i>
                                        <p> Crianças </p>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="consultas" onClick={this.onChange}>
                                <li className="nav-item">
                                    <Link to="#" className={"nav-link " + reportsAtive}>
                                        <i className="nav-icon fas fa-heartbeat"></i>
                                        <p> Consultas </p>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" id="relatorios" onClick={this.onChange}>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link">
                                        <i className="nav-icon fas fa-receipt"></i>
                                        <p> Relatórios </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- /.sidebar-menu --> */}
                    </div>
                    {/* <!-- /.sidebar --> */}
                </aside>

            </div>
        )
    }
}

Sidebar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Sidebar);