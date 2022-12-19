import { combineReducers } from "redux";
import { initialState } from "./initial_state";
import { SEND_EMAIL, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_IN, SIGN_OUT, SIGN_UP, DELETE_EMAIL } from "./action_types";

function user(state=initialState.user, action){
    switch(action.type){
        case SIGN_IN: {
            console.log("sign-in")
            return action.payload.user;
        }
        
        case SIGN_UP: {
            console.log("Sign up")
            return action.payload.user;
        }

        case SIGN_OUT: {
            console.log("Signing-out");
            localStorage.removeItem("user");
            return null;
        }

        case SEND_EMAIL: {
            console.log("Sending email", action.payload.emailData);
            return state;
        }

        case DELETE_EMAIL: {
            console.log("deleting email", action.payload.id);
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
            return { ...state, messageTitle: action.payload.messageTitle, messageText: action.payload.messageText };
        }
        case HIDE_MESSAGE: {
            console.log("Hiding the message");
            return null;
        }
        default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({ user, message });