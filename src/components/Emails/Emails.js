import { useSelector } from "react-redux";
import EmailOpener from "./Email_opener";
import EmailsTopPannel from "./Emails_top_pannel";

function Emails({ handleSignOut }){
    const emails = useSelector((state) => state.user?.emails.results) || [];

    useSelector((state) => console.log(state.user.emails));

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
                        emails.map((email) => <EmailOpener email={email} key={email.id} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Emails;