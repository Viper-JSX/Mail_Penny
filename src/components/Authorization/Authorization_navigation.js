import { NavLink } from "react-router-dom";

function AuthorizationNavigation(){
    return(
        <nav className="authorizationNavigation">
            <NavLink to="sign-in">Sign-in</NavLink>
            <NavLink to="sign-up">Sign-up</NavLink>
        </nav>
    );
}

export default AuthorizationNavigation;