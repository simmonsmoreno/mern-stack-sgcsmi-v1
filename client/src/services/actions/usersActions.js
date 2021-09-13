import api from '../api';

import { GET_USERS } from "./types";

// GET USERS
export const getUsers =  () => async dispatch => {
    const res = await api.get("/users")
    dispatch({
        type: GET_USERS,
        payload: res.data
    })
};