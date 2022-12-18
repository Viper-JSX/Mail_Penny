import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, signIn } from "./redux/thunks";

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

    return(
        <div className="App">
            <Layout
                handleEmailSend={handleEmailSend}
            />
        </div>
    )
}

export default App;