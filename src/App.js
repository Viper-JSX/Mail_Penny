import "./css/main.css";

import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmail, sendEmail, signIn, signUp } from "./redux/thunks";
import { signOut } from "./redux/action_creators";


function App(){
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(localStorage);
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        if(user){ //user is logged-in
            dispatch(signIn({ signInData: user }));
        }
    }, []);

    function handleEmailSend({ event, emailData }){
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(sendEmail({ emailData, user }));
    }

    function handleEmailDelete({ id }){
        dispatch(deleteEmail({ id }));
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