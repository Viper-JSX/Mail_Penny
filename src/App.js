import React from "react";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { showMessage, signIn, signUp } from "./redux/thunks";

function App(){
    const dispatch = useDispatch();
    return(
        <div className="App">
            <Layout />
        </div>
    )
}

export default App;