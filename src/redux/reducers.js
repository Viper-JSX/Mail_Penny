import { combineReducers } from "redux";
import { initialState } from "./initial_state";
import { SEND_EMAIL, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_IN, SIGN_OUT, SIGN_UP, DELETE_EMAIL } from "./action_types";

function user(state=initialState.user, action){
    switch(action.type){
        case SIGN_IN: {
            return { ...action.payload.user, emails: action.payload.emails  };
        }
        
        case SIGN_UP: {
            return { ...action.payload.user, emails: [] };
        }

        case SIGN_OUT: {
            localStorage.removeItem("user");
            return null;
        }

        case SEND_EMAIL: {
            return { ...state };
        }

        case DELETE_EMAIL: {
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
            return { ...state, messageTitle: action.payload.messageTitle, messageText: action.payload.messageText };
        }
        case HIDE_MESSAGE: {
            return null;
        }
        default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({ user, message });