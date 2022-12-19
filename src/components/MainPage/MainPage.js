import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Emails from "../Emails/Emails";

function MainPage({ handleSignOut, handleEmailsSwitch }){
    const user = useSelector((state) => state.user);

    if(!user){
        //return(
        //    <Navigate to={"/authorization/sign-in"} />
        //);
    }

    return(
        <div className="mainPage">
            <Emails handleSignOut={handleSignOut} handleEmailsSwitch={handleEmailsSwitch} />
        </div>
    );
}

export default MainPage;