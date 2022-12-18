import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, signIn, signUp } from "./redux/thunks";
import { signOut } from "./redux/action_creators";

function App(){
    const dispatch = useDispatch();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if(user){ //user is logged-in
            dispatch(signIn({ signInData: {username: user.username, password: user.password} }));
        }
    }, []);


    function handleEmailSend({ event, emailData }){
        event.preventDefault();
        dispatch(sendEmail({ emailData }));
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

                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
                handleSignOut={handleSignOut}
            />
        </div>
    )
}

export default App;