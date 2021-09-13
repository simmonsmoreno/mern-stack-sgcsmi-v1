import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../services/actions/authActions";

import api from '../../services/api';
import { getUsers } from "../../services/actions/usersActions";

import NavBar from './Layouts/Navbar';
import Sidebar from './Layouts/Sidebar';
import PageHeader from './Layouts/PageHeader';

class Dashboard extends Component {

    state = {
        user: {}
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    componentDidMount = async () => {
        const user = await api.get(`/users/${this.props.auth.user.uid}`)
        this.setState({ user: user.data })
        getUsers()
    }

    render() {
        return (
            <div>
                <NavBar />
                <Sidebar />
                <div className="content-wrapper">
                    <PageHeader title={'Home'}/>
                    <section className="content">
                        <div className="row card card-body m-2">
                            <div className="text-center">
                                <h4>
                                    Bem-vindo, <b>{this.state.user.firstname}</b>
                                </h4>
                                <p>Este é o seu Dashboard</p>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    onClick={this.onLogoutClick}
                                    className="btn btn-primary"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
