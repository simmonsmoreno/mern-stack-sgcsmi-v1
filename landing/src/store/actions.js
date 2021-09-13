import jwt_decode from "jwt-decode";
import axios from "axios";
import api from '../services/api'

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    CREATE_CONSULTA,
    GET_CRIANCA,
    UPDATE_CRIANCA,
    UPDATE_USER
} from "./constant";

import setAuthToken from "../services/setAuthToken";

// LOGIN
export const loginUser = (userData, history) => dispatch => {
    axios
        .post("/signin", userData)
        .then(async res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);    // Save to localStorage
            setAuthToken(token);                        // Set token to Auth header
            const decoded = jwt_decode(token);          // Decode token to get user data
            dispatch(setCurrentUser(decoded));          // Set current user
            history.push("/landing-page")
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// SET LOGGED USER
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// LOG USER OUT
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");            // Remove token from local storage
    setAuthToken(false);                            // Remove auth header for future requests
    dispatch(setCurrentUser({}));                   // Set current user to empty object {} which will set isAuthenticated to false
};

// create consulta
export const createConsulta = consultaData => dispatch => {
    api
        .post("/consultas", consultaData)
        .then(res =>
            dispatch({
                type: CREATE_CONSULTA,
                payload: res.data
            })
        )
        .catch(err => console.log(err))
}

// get specific crianca by id
export const getCrianca = id => dispatch => {
    api
        .get(`/criancas/parents/crianca/${id}`)
        .then(res =>
            dispatch({
                type: GET_CRIANCA,
                payload: res.data.criancas
            })
        )
        .catch(err => console.log(err));
};

// update crianca
export const updateCrianca = criancaData => dispatch => {
    api
        .put(`/criancas/${criancaData.id}`, criancaData)
        .then(res =>
            dispatch({
                type: UPDATE_CRIANCA,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};

// update user
export const updateUser = userData => dispatch => {
    api
        .put(`/users/${userData.id}`, userData)
        .then(res =>
            dispatch({
                type: UPDATE_USER,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};