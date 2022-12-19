import { DELETE_EMAIL, HIDE_MESSAGE, SEND_EMAIL, SHOW_MESSAGE, SIGN_IN, SIGN_UP } from "./action_types";

export function signIn(payload){
    return function(dispatch){
        //Fetch the user
        localStorage.setItem("user", JSON.stringify({ username: payload.signInData.username, password: payload.signInData.password }));
        dispatch({ type: SIGN_IN, payload });
    }
}

export function signUp(payload){
    return function(dispatch){
        //Create and post the user
        localStorage.setItem("user", JSON.stringify({ username: payload.signUpData.username, password: payload.signUpData.password }));
        dispatch({ type: SIGN_UP, payload });
    }
}

export function sendEmail(payload){
    return function(dispatch){
        dispatch({ type: SEND_EMAIL, payload });
    }
}

export function deleteEmail(payload){
    return function(dispatch){
        console.log("delete")
        dispatch({ type: DELETE_EMAIL, payload });
    }
}

export function showMessage(payload){
    return function(dispatch){
        dispatch({ type: SHOW_MESSAGE, payload });

        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 5000);
    }
}