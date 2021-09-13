import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./services/store";
import './services/api/setCurrentUser'
import PrivateRoute from "./privateRoutes";

import Register from "./components/Auth/Signup";
import Login from "./components/Auth/Signin";
import Dashboard from "./components/Dashboard";
import Users from './components/Dashboard/Pages/Users';
import Criancas from './components/Dashboard/Pages/Criancas';
import RegistarCrianca from './components/Dashboard/Pages/Criancas/Registar';
import Profile from './components/Dashboard/Pages/Users/Profile';
import ProfileCrianca from './components/Dashboard/Pages/Criancas/Profile';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/users" component={Users} />
              <PrivateRoute exact path="/criancas" component={Criancas} />
              <PrivateRoute exact path="/criancas/registar" component={RegistarCrianca} />
              <PrivateRoute exact path="/users/profile/:id" component={Profile} />
              <PrivateRoute exact path="/criancas/profile/:id" component={ProfileCrianca} />
              <Redirect exact path="/" to="/dashboard" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
