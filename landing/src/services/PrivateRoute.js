import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
        }
    />
);

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.reducer.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
