import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Emails from "../Emails/Emails";

function MainPage({ handleSignOut }){
    const user = useSelector((state) => state.user);

    //if(!user){
    //    return(
    //        <Navigate to={"/authorization/sign-in"} />
    //    );
    //}

    return(
        <div className="mainPage">
            <Emails handleSignOut={handleSignOut} />
        </div>
    );
}

export default MainPage;