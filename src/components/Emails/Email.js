import { useParams } from "react-router";

function Email(){
    const emailId = useParams().id;

    return(
        <div className="email">

        </div>
    );
}

export default Email;