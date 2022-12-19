import { Navigate, Outlet } from "react-router";

import AuthorizationNavigation from "./Authorization_navigation";
import { useSelector } from "react-redux";


function Authorization(){
    const user = useSelector((state) => state.user);

    if(user){
        return(
            <Navigate to="/" />
        );
    }

    return(
        <div className="authorization">
            <AuthorizationNavigation />
            <Outlet />
        </div>
    );
}

export default Authorization;