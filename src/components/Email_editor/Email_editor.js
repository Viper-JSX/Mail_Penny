import { useSelector } from "react-redux";

function EmailEditor(){
    const user = useSelector((state) => state.user);

    return(
        <div className="emailEditor">
            <form className="emailForm" method="POST">
                <label for="senderInput">Sender
                    <input id="senderInput" name="sender" value={user?.email || "none"} type="email" disabled />
                </label>

                <input type="email" name="recipientEmail" placeholder="Recipient" />
                <input type="text" name="subjectText" placeholder="Subject" />
                <textarea name="emailText" placeholder="Email text"></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );  
}

export default EmailEditor;