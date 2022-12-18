import { useSelector } from "react-redux";
import EmailOpener from "./Email_opener";
import EmailsTopPannel from "./Emails_top_pannel";

function Emails({ handleSignOut }){
    const emails = useSelector((state) => state.user?.emails) || [];

    return(
        <div className="emailsWrapper">
            <EmailsTopPannel handleSignOut={handleSignOut} />

            <table className="emails">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Recipient</th>
                        <th>Subject</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        emails.forEach((email) => <EmailOpener email={email} />)
                    }

                    <EmailOpener email={{id: 1, recipient: "yura@gmail.com", subject: "Some text"}} />
                </tbody>
            </table>
        </div>
    )
}

export default Emails;