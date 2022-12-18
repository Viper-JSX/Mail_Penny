import { combineReducers } from "redux";

function user(state=null, action){
    switch(action.type){
        default:{
            console.log(state)
            return state;
        }
    }
}

function message(state=null, action){
    switch(action.type){
        default:{
            return state;
        }
    }
}

export const rootReducer = combineReducers({ user, message });