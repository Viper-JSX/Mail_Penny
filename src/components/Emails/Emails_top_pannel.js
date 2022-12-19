import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function EmailsTopPannel({ handleSignOut }){
    const user = useSelector((state) => state.user);

    return(
        <div>
            <NavLink to="/emails/create">
                <button>Write email</button>
            </NavLink>
            <b className="userEmailAdress">{user?.email}</b>
            <b className="username">{user?.username}</b>
            <button className="signOutButton" onClick={handleSignOut}>Sign-out</button>
        </div>
    );
}

export default EmailsTopPannel;