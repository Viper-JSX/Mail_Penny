import { combineReducers } from "redux";
import { initialState } from "./initial_state";
import { CREATE_EMAIL, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_IN, SIGN_OUT, SIGN_UP } from "./action_types";

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
        case SHOW_MESSAGE: {
            console.log("Showing the message");
            return state;
        }
        case HIDE_MESSAGE: {
            console.log("Hiding the message");
            return state;
        }
        default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({ user, message });