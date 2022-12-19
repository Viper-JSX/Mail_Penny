import { useParams } from "react-router";

function Email({ handleEmailDelete }){
    const emailId = parseInt(useParams().id);

    return(
        <div className="email">
            <button className="deleteEmailButton" onClick={() => handleEmailDelete({ id: emailId })}>Delete</button>
        </div>
    );
}

export default Email;