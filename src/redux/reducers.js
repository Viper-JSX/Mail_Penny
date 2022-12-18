import { combineReducers } from "redux";
import { initialState } from "./initial_state";

function user(state=initialState.user, action){
    switch(action.type){
        default:{
            console.log(state)
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