import { SIGN_IN, SIGN_UP } from "./action_types";

export function signIn(payload){
    return function(dispatch){
        //Fetch the user
        dispatch({ type: SIGN_IN, payload });
    }
}

export function signUp(payload){
    return function(dispatch){
        //Create and post the user
        dispatch({ type: SIGN_UP, payload });
    }
}

