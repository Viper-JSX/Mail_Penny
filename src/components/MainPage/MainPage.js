import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Emails from "../Emails/Emails";

function MainPage(){
    const user = useSelector((state) => state.user);

    //if(!user){
    //    return(
    //        <Navigate to={"/authorization/sign-in"} />
    //    );
    //}

    return(
        <div className="mainPage">
            <Emails />
        </div>
    );
}

export default MainPage;