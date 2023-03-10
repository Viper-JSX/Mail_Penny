import { useSelector } from "react-redux";
import EmailOpener from "./Email_opener";
import EmailsTopPannel from "./Emails_top_pannel";
import PagginationMenu from "../Paggination_menu/Pagination_menu";

function Emails({ handleSignOut, handleEmailsSwitch }){
    const emails = useSelector((state) => state.user?.emails);
    const emailsToShow = emails?.results || [];
    const pagginationMenuDisabled = useSelector((state) => state.user.pagginationMenuDisabled);

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
                        emailsToShow.length > 0 ?
                        emailsToShow.map((email) => <EmailOpener email={email} key={email.id} />)
                        :
                        <tr><td colSpan={3} style={{ textAlign: "center" }}><b>You have no emails yet</b></td></tr>
                    }
                </tbody>
            </table>

            <PagginationMenu count={emails?.count || 0} step={5} handler={handleEmailsSwitch} disabled={pagginationMenuDisabled} />
        </div>
    )
}

export default Emails;