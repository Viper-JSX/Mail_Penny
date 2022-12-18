import { useState } from "react";

function SignUpForm({ handleSignUp }){
    const [ signUpData, setSignUpData ] = useState({ username: "", email: "", password: "" });
    
    function handleUsernameChange(event){
        setSignUpData({ ...signUpData, username: event.target.value });
    }

    function handleEmailChange(event){
        setSignUpData({ ...signUpData, email: event.target.value });
    }

    function handlePasswordChange(event){
        setSignUpData({ ...signUpData, password: event.target.value });
    }

    return(
        <form className="signUpForm" onSubmit={(event) => handleSignUp({ event, signUpData })}>
            <input type="text" placeholder="Username" value={signUpData.username} onChange={handleUsernameChange} />
            <input type="email" placeholder="Email" value={signUpData.email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={signUpData.password} onChange={handlePasswordChange} />
            <button type="submit">Sign-up</button>
        </form>
    )
}

export default SignUpForm;