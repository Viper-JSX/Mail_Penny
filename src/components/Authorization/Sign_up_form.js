import { useState } from "react";

function SignUpForm({ handleUsernameChange }){
    const [ signUpData, setSignUpData ] = useState({ username: "", email: "", password: "" });
    
    return(
        <form className="signUpForm">
            <input type="text" placeholder="Nickname" value={signUpData.username} />
            <input type="email" placeholder="Email" value={signUpData.email} />
            <input type="password" placeholder="Password" value={signUpData.password} />
            <button type="submit"></button>
        </form>
    )
}

export default SignUpForm;