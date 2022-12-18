import { combineReducers } from "redux";
import { initialState } from "./initial_state";
import { CREATE_EMAIL, SIGN_IN, SIGN_OUT, SIGN_UP } from "./action_types";

function user(state=initialState.user, action){
    switch(action.type){
        case SIGN_IN: {
            console.log("Signing-in");
            return state;
        }
        
        case SIGN_UP: {
            console.log("Signing-up");
            return state;
        }

        case SIGN_OUT: {
            console.log("Signing-out");
            return state; 
        }

        case CREATE_EMAIL: {
            console.log("Creating email");
            return state;
        }

        default: {
            return state;
        }
    }
}

function message(state=initialState.message, action){
    switch(action.type){
        default:{
            return state;
        }
    }
}

export const rootReducer = combineReducers({ user, message });