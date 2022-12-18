import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function MainPage(){
    const user = useSelector((state) => state.user);

    //if(!user){
    //    return(
    //        <Navigate to={"/authorization/sign-in"} />
    //    );
    //}

    return(
        <div>
            <h2>Main Page</h2>
        </div>
    );
}

export default MainPage;