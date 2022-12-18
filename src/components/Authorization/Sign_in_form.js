import { useState } from "react";

function SignInForm(){
    const [ signInData, setSignInData ] = useState({ username: "", email: "", password: "" });
    
    function handleUsernameChange(event){
        setSignInData({ ...signInData, username: event.target.value });
    }

    function handlePasswordChange(event){
        setSignInData({ ...signInData, password: event.target.value });
    }

    return(
        <form className="signInForm">
            <input type="text" placeholder="Username" value={signInData.username} onChange={handleUsernameChange} />
            <input type="password" placeholder="Password" value={signInData.password} onChange={handlePasswordChange} />
            <button type="submit">Sign-In</button>
        </form>
    )
}

export default SignInForm;