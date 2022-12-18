import { NavLink } from "react-router-dom";

function EmailsTopPannel(){
    return(
        <div>
            <NavLink to="/emails/create">
                <button>Write email</button>
            </NavLink>
        </div>
    );
}

export default EmailsTopPannel;