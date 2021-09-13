import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const rootReducer = combineReducers({
    reducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
);

export default store;
