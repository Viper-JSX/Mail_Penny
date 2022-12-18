import EmailsTopPannel from "./Emails_top_pannel";

function Emails({ emails }){
    return(
        <div className="emailsWrapper">
            <EmailsTopPannel />
            
            <table className="emails">
                <tr>
                    <th>Id</th>
                    <th>Recipient</th>
                    <th>Subject</th>
                </tr>
            </table>
        </div>
    )
}

export default Emails;