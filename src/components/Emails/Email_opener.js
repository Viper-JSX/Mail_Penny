import { Link } from "react-router-dom";

function EmailOpener({ email }){
    return(
        <tr className="emailOpener">
            <td>
                <Link to={`/emails/${email.id}`} >{email.id}</Link>
            </td>
            <td>
                <Link to={`/emails/${email.id}`} >{email.recipient}</Link>
            </td>
            <td>
                <Link to={`/emails/${email.id}`} >{email.subject}</Link>
            </td>
        </tr>
    )
}

export default EmailOpener;