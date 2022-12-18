import { Outlet } from "react-router";

import AuthorizationNavigation from "./Authorization_navigation";


function Authorization(){
    return(
        <div className="authorization">
            <AuthorizationNavigation />
            <Outlet />
        </div>
    );
}

export default Authorization;