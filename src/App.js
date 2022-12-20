import "./css/main.css";

import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmail, getEmails, sendEmail, showMessage, signIn, signUp } from "./redux/thunks";
import { signOut } from "./redux/action_creators";
import { useNavigate } from "react-router";


function App(){
    const emails = useSelector((state) => state.user?.emails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){ //user is logged-in
            dispatch(signIn({ signInData: user }));
        }
    }, []);

    function handleEmailsSwitch({ current, next }){
        const user = JSON.parse(localStorage.getItem("user"));
        const headers = { "Authorization": `Basic ${ btoa(user.username + ":" + user.password)}`};
        if(next > current){
           dispatch(getEmails({ url: emails.next, headers }));
        }
        else if(next < current){
            dispatch(getEmails({ url: emails.previous, headers }));
        }
    }

    function handleEmailSend({ event, emailData }){
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(sendEmail({ emailData, user, navigate }));
        //navigate("/");
    }

    function handleEmailDelete({ id }){
        dispatch(deleteEmail({ id }));
        navigate("/");
    }

    function handleSignIn({ event, signInData }){
        event.preventDefault();
        dispatch(signIn({ signInData }));
    }

    function handleSignUp({ event, signUpData }){
        event.preventDefault();
        dispatch(signUp({ signUpData }));
    }

    function handleSignOut(){
        dispatch(signOut());
    }

    return(
        <div className="App">
            <Layout
                handleEmailsSwitch={handleEmailsSwitch}
                handleEmailSend={handleEmailSend}
                handleEmailDelete={handleEmailDelete}

                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
                handleSignOut={handleSignOut}
            />
        </div>
    )
}

export default App;