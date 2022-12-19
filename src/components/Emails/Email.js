import { useParams } from "react-router";

function Email({ handleEmailDelete }){
    const emailId = useParams().id;

    return(
        <div className="email">
            <button className="deleteEmailButton" onClick={() => handleEmailDelete({ id: emailId })}>Delete</button>
        </div>
    );
}

export default Email;