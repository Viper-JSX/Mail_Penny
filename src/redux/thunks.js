import axios from "axios";
import { DELETE_EMAIL, HIDE_MESSAGE, SEND_EMAIL, SHOW_MESSAGE, SIGN_IN, SIGN_UP } from "./action_types";

export function signIn(payload){
    return async function(dispatch){
        //Fetch the user
        const user =  await axios.get("http://68.183.74.14:4005/api/users/current/", {
            headers: { "Authorization": `Basic ${ btoa(payload.signInData.username + ":" + payload.signInData.password)}` }
        })
        .then((response) => response.data)
        .catch((err) => console.log(err, "when fetching user"));

        if(user){
            const emails = await axios.get(`http://68.183.74.14:4005/api/emails/`, 
            {
                headers: { "Authorization": `Basic ${ btoa(payload.signInData.username + ":" + payload.signInData.password)}` },
            })
            .then((response) => response.data.results || [])
            .catch((err) => console.log(err));

            localStorage.setItem("user", JSON.stringify({ username: payload.signInData.username, password: payload.signInData.password }));
            dispatch({ type: SIGN_IN, payload: { user, emails } });
        }
    }
}

export function signUp(payload){
    return async function(dispatch){
        //Create and post the user
        const user = await axios.post("http://68.183.74.14:4005/api/users/", 
        {
            username: payload.signUpData.username,
            email: payload.signUpData.email,
            password: payload.signUpData.password,
        },

        {
            headers: { "Authorization": `Basic ${ btoa("dev_6" + ":" + "8Fjg345gGW")}` }
        })
        .then((response) => response.data)
        .catch((err) => console.log(err.response.data));

        if(user){
            localStorage.setItem("user", JSON.stringify({ username: payload.signUpData.username, password: payload.signUpData.password }));
            dispatch({ type: SIGN_UP, payload: { user } });
        }
    }
}

export function sendEmail(payload){
    return function(dispatch){
        axios.post("http://68.183.74.14:4005/api/emails/", 
        payload.emailData,

        {
            headers: { "Authorization": `Basic ${ btoa(payload.user.username + ":" + payload.user.password)}` },
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

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