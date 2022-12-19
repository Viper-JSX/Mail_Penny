import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

function Email({ handleEmailDelete }){
    const user = useSelector((state) => state.user);
    if(!user){ //User not signed-in
        return(
            <Navigate to="/authorization" />
        );
    }

    const emailId = parseInt(useParams().id);
    const email = useSelector((state) => state.user?.emails?.results || []).find((email) => email.id === emailId);
    console.log(email);

    return(
        <div className="email">
            <button className="deleteEmailButton" onClick={() => handleEmailDelete({ id: emailId })}>Delete</button>
            <h3>{email.subject}</h3>
            <p>{email.message}</p>
            <b>To: {email.recipient}</b>
        </div>
    );
}

export default Email;