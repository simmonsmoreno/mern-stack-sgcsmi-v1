import jwt_decode from "jwt-decode";

import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";

if (localStorage.jwtToken) {                    // Check for token to keep user logged in
    
    const token = localStorage.jwtToken;        // Set auth token header auth
    setAuthToken(token);
    
    const decoded = jwt_decode(token);          // Decode token and get user info and exp
    
    store.dispatch(setCurrentUser(decoded));    // Set user and isAuthenticated
    
    const currentTime = Date.now() / 1000;      // Check for expired token // to get in milliseconds
    
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());           // Logout user
        window.location.href = "./login";       // Redirect to login
    }
}