import React from "react";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { createEmail, showMessage, signIn, signUp } from "./redux/thunks";
import { signOut } from "./redux/action_creators";

function App(){
    const dispatch = useDispatch();
    
    return(
        <div className="App">
            <Layout />
        </div>
    )
}

export default App;