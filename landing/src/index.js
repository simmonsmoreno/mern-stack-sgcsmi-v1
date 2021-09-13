import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./services/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./store/actions";
import PrivateRoute from './services/PrivateRoute'

// pages for this kit
import LoginPage from "views/LoginPage.js";
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/ProfilePage.js";
import DefaultPage from "views/DefaultPage.js";

// Check for token to keep user logged in
if (localStorage.jwtToken) {

  const token = localStorage.jwtToken;            // Set auth token header auth
  setAuthToken(token);

  const decoded = jwt_decode(token);              // Decode token and get user info and exp

  store.dispatch(setCurrentUser(decoded));        // Set user and isAuthenticated

  const currentTime = Date.now() / 1000;          // Check for expired token (in milliseconds)

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());               // Logout user
    window.location.href = "/";     // Redirect to login
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Switch>
          <PrivateRoute
            path="/landing-page" component={LandingPage}
          />
          <PrivateRoute
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            path="/login-page"
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/"
            render={(props) => <DefaultPage {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
