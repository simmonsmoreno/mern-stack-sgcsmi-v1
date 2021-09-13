import {
    GET_ERRORS,
    SET_CURRENT_USER,
    GET_CRIANCA,
    UPDATE_CRIANCA,
    UPDATE_USER
} from "./constant";

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    crianca: {},
    msg: ''
};

export default function (state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
                msg: 'Bem vindo!'
            };

        case GET_ERRORS:
            return {
                ...state,
                msg: 'Credenciais invalidos'
            };

        case GET_CRIANCA:
            return {
                ...state,
                crianca: action.payload[0]
            };

        case UPDATE_CRIANCA:
            return {
                ...state,
                crianca: action.payload,
                msg: 'Dados atualizados com sucesso!'
            };

        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
                msg: 'Dados atualizados com sucesso!'
            };

        default:
            return state;
    }
}