import { useSelector } from "react-redux";
import EmailOpener from "./Email_opener";
import EmailsTopPannel from "./Emails_top_pannel";
import PagginationMenu from "../Paggination_menu/Pagination_menu";

function Emails({ handleSignOut, handleEmailsSwitch }){
    const emails = useSelector((state) => state.user?.emails);
    const emailsToShow = emails?.results || [];

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
                        emailsToShow.map((email) => <EmailOpener email={email} key={email.id} />)
                    }
                </tbody>
            </table>

            <PagginationMenu count={/*emails.count*/ 42} step={5} handler={handleEmailsSwitch} />
        </div>
    )
}

export default Emails;