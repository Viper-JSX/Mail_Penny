import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "./redux/thunks";

function App(){
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if(user){ //user is logged-in
            dispatch(signIn({login: user.login, password: user.password}));
        }
    }, []);

    return(
        <div className="App">
            <Layout />
        </div>
    )
}

export default App;