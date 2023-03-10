import { combineReducers, compose } from "redux";
import { initialState } from "./initial_state";
import { SEND_EMAIL, HIDE_MESSAGE, SHOW_MESSAGE, SIGN_IN, SIGN_OUT, SIGN_UP, DELETE_EMAIL, GET_EMAILS, SET_PAGGINATION_MENU_DISAILITY } from "./action_types";

function user(state=initialState.user, action){
    switch(action.type){
        case SIGN_IN: {
            return { ...action.payload.user, emails: action.payload.emails  };
        }
        
        case SIGN_UP: {
            return { ...action.payload.user };
        }

        case SIGN_OUT: {
            localStorage.removeItem("user");
            return null;
        }

        case GET_EMAILS: {
            return { ...state, emails: action.payload.emails };
        }

        case SEND_EMAIL: {
            return { ...state };
        }

        case DELETE_EMAIL: {
            const id = action.payload.id;
            return { ...state, emails: { ...state.emails, results: state.emails.results.filter((email) => email.id !== id) }};
        }

        case SET_PAGGINATION_MENU_DISAILITY:{
            return({ ...state, pagginationMenuDisabled: action.payload.disabled});
        }

        default: {
            return state;
        }
    }
}

function message(state=initialState.message, action){
    switch(action.type){
        case SHOW_MESSAGE: {
            return { messageTitle: action.payload.messageTitle, messageText: action.payload.messageText };
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