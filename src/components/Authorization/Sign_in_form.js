import { useState } from "react";

function SignInForm({ handleSignIn }){
    const [ signInData, setSignInData ] = useState({ username: "", password: "" });
    
    function handleUsernameChange(event){
        setSignInData({ ...signInData, username: event.target.value });
    }

    function handlePasswordChange(event){
        setSignInData({ ...signInData, password: event.target.value });
    }

    return(
        <form className="signInForm" onSubmit={(event) => handleSignIn({ event, signInData })}>
            <input type="text" placeholder="Username" value={signInData.username} onChange={handleUsernameChange} />
            <input type="password" placeholder="Password" value={signInData.password} onChange={handlePasswordChange} />
            <button type="submit">Sign-In</button>
        </form>
    )
}

export default SignInForm;