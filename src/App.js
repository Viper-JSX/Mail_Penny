import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, signIn, signUp } from "./redux/thunks";

function App(){
    const dispatch = useDispatch();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if(user){ //user is logged-in
            dispatch(signIn({login: user.login, password: user.password}));
        }
    }, []);


    function handleEmailSend({ event, emailData }){
        event.preventDefault();
        dispatch(sendEmail({ emailData }));
        console.log(emailData);
    }

    function handleSignIn({ event, signInData }){
        event.preventDefault();
        dispatch(signIn({ signInData }));
    }

    function handleSignUp({ event, signUpData }){
        event.preventDefault();
        dispatch(signUp({ signUpData }));
    }

    return(
        <div className="App">
            <Layout
                handleEmailSend={handleEmailSend}

                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
            />
        </div>
    )
}

export default App;