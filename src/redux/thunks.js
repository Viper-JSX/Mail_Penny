import axios from "axios";
import { DELETE_EMAIL, GET_EMAILS, HIDE_MESSAGE, SEND_EMAIL, SHOW_MESSAGE, SIGN_IN, SIGN_UP } from "./action_types";
import { validateEmailAdress } from '../utilities/validation/validate_email_adress';
import { fetchEmails } from "../utilities/fetching/fetch_emails";
import { validateEmail } from "../utilities/validation/validate_email";
import { apiBaseUrl } from "../api/api_constants";

export function signIn(payload){
    return async function(dispatch){
        console.log(payload)
        if(!payload.signInData.username || !payload.signInData.password){
            dispatch(showMessage({ messageTitle: "Invalid input", messageText: "Fill in all the fields" }));
            return;
        }

        //Fetch the user
        const user =  await axios.get("http://68.183.74.14:4005/api/users/current/", {
            headers: { "Authorization": `Basic ${ btoa(payload.signInData.username + ":" + payload.signInData.password)}` }
        })
        .then((response) => response.data)
        .catch((err) => console.log(err.response));

        if(user){
            const emails = await fetchEmails("http://68.183.74.14:4005/api/emails/", { "Authorization": `Basic ${ btoa(payload.signInData.username + ":" + payload.signInData.password)}` });
            localStorage.setItem("user", JSON.stringify({ username: payload.signInData.username, password: payload.signInData.password }));
            dispatch({ type: SIGN_IN, payload: { user, emails } });
        }
    }
}

export function signUp(payload){
    return async function(dispatch){
        if(!payload.signUpData.username || !validateEmailAdress(payload.signUpData.email) || !payload.signUpData.password){
            dispatch(showMessage({ messageTitle: "Invalid input", messageText: "Fill in all the fields and check the correctness of the data. Password must be at least 8 characters long" }));
            return;
        }

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
        .catch((err) => console.log(err.response));

        if(user){
            localStorage.setItem("user", JSON.stringify({ username: payload.signUpData.username, password: payload.signUpData.password }));
            dispatch({ type: SIGN_UP, payload: { user } });
        }
    }
}

export function getEmails(payload){
    return async function(dispatch){
        const emails = await fetchEmails(payload.url, payload.headers);
        if(!emails){
            dispatch(showMessage({ messageTitle: "Cannot get", messageText: "Cannot get the emails" }));
            return;
        }

        dispatch({ type: GET_EMAILS, payload: { emails } });
    }
}

export function sendEmail(payload){
    return async function(dispatch){
        if(!validateEmail(payload.emailData)){
            dispatch(showMessage({ messageTitle: "Invalid input", messageText: "Fill in all the fields" }));
            return;
        }

        payload.navigate('/');
        const headers = { "Authorization": `Basic ${ btoa(payload.user.username + ":" + payload.user.password)}` };

        await axios.post("http://68.183.74.14:4005/api/emails/", payload.emailData, {headers})
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

        dispatch({ type: SEND_EMAIL, payload: { ...payload, navigate: null } }); //We do not need navigate function inside reducer
        dispatch(getEmails({ url: `${apiBaseUrl}/emails/`, headers })); //To update emails list after deleting
    }
}

export function deleteEmail(payload){
    return async function(dispatch){
        const user = JSON.parse(localStorage.getItem("user"));
        const headers = { "Authorization": `Basic ${ btoa(user.username + ":" + user.password)}` };

        await axios.delete( `http://68.183.74.14:4005/api/emails/${payload.id}/`, { headers })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

        dispatch({ type: DELETE_EMAIL, payload });
        dispatch(getEmails({ url: `${apiBaseUrl}/emails/`, headers })); //To update emails list
    }
}

export function showMessage(payload){
    return function(dispatch){
        dispatch({ type: SHOW_MESSAGE, payload });

        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 5000);
    }
}