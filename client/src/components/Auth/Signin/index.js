import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import classnames from "classnames";
import PropTypes from "prop-types";

import { loginUser } from "../../../services/actions/authActions";

import Footer from '../_partials/Footer'
import Header from '../_partials/Header'

import './styles.css'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    // onChange = e => {
    //     this.setState({ [e.target.id]: e.target.value });
    // };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    render() {
        return (
            <div className="container body-login">
                <Header title="Login" />
                <p className="text-center text-secondary">
                    Não possui uma conta? <Link to="/register" className="text-primary"> Regista-se</Link>
                </p>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                {/* <!-- Email Input --> */}
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={e => this.setState({ email: e.target.value })}
                                    value={this.state.email}
                                    required
                                    autoFocus />

                                {/* <!-- Password Input --> */}
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={e => this.setState({ password: e.target.value })}
                                    value={this.state.password}
                                    required />
                            </div>
                            <button
                                className="mt-4 btn btn-lg btn-primary btn-block"
                                type="submit">
                                Entrar
                            </button>

                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);