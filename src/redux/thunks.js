import { CREATE_EMAIL, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_IN, SIGN_UP } from "./action_types";

export function signIn(payload){
    return function(dispatch){
        //Fetch the user
        console.log(payload);
        dispatch({ type: SIGN_IN, payload });
    }
}

export function signUp(payload){
    return function(dispatch){
        //Create and post the user
        dispatch({ type: SIGN_UP, payload });
    }
}

export function createEmail(payload){
    return function(dispatch){
        dispatch({ type: CREATE_EMAIL, payload });
    }
}

export function showMessage(payload){
    return function(dispatch){
        dispatch({ type: SHOW_MESSAGE, payload });

        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 5000);
    }
}