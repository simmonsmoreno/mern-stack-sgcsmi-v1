import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../../services//actions/authActions";

class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (

            // <!-- Navbar -->
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* <nav className="main-header navbar navbar-expand navbar-white navbar-light border-bottom-0"> */}
                {/* <!-- Left navbar links --> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" to="#" role="button">
                            <i className="fas fa-bars"></i>
                        </Link>
                    </li>

                </ul>

                {/* <!-- SEARCH FORM --> */}
                <form className="form-inline">
                    <div className="input-group input-group-sm" id="search-form">
                        <input className="form-control form-control-navbar" type="search" placeholder="Pesquisar" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* <!-- Right navbar links --> */}
                <ul className="navbar-nav ml-auto">
                    {/* <!-- Messages Dropdown Menu --> */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" to="#">
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <Link to="#" className="dropdown-item">
                                {/* <!-- Message Start --> */}
                                <div className="media">
                                    <img src="/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item">
                                {/* <!-- Message Start --> */}
                                <div className="media">
                                    <img src="/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item">
                                {/* <!-- Message Start --> */}
                                <div className="media">
                                    <img src="/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                {/* <!-- Message End --> */}
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
                        </div>
                    </li>
                    {/* <!-- Notifications Dropdown Menu --> */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" to="#">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                        </div>
                    </li>
                    {/* Sign-out Menu */}
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="#"
                            onClick={this.onLogoutClick}>
                            <i className="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
            /* <!-- /.navbar --> */
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);