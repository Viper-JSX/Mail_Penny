import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

function Email({ handleEmailDelete }){
    const user = useSelector((state) => state.user);
    const messageRef = useRef(null);
    const emailId = parseInt(useParams().id);
    const email = useSelector((state) => state.user?.emails?.results || []).find((email) => email.id === emailId);

    useEffect(() => {
        messageRef.current.innerHTML = email.message;
    }, [])

    if(!user){ //User not signed-in
        return(
            <Navigate to="/authorization" />
        );
    }

    return(
        <div className="email">
            <button className="deleteEmailButton" onClick={() => handleEmailDelete({ id: emailId })}>Delete</button>
            <h1 className="emailSubject">
                <u>Subject:</u>
                <br />
                {email.subject}
            </h1>
            <p ref={messageRef}></p>
            <b>To: {email.recipient}</b>
        </div>
    );
}

export default Email;