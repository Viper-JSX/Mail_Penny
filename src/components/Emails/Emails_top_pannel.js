import { NavLink } from "react-router-dom";

function EmailsTopPannel({ handleSignOut }){
    return(
        <div>
            <button className="signOutButton" onClick={handleSignOut}>Sign-out</button>
            <NavLink to="/emails/create">
                <button>Write email</button>
            </NavLink>
        </div>
    );
}

export default EmailsTopPannel;