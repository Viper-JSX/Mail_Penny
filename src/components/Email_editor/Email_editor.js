import { useState } from "react";
import { useSelector } from "react-redux";

function EmailEditor(){
    const user = useSelector((state) => state.user);
    const [ emailData, setEmailData ] = useState({ 
        sender: user?.email || "none",
        recipient: "",
        subjectText: "",
        emailText: ""
    });


    function handleRecipientChange(event){
        setEmailData({ ...emailData, recipient: event.target.value });
    }

    function handleSubjectTextChange(event){
        setEmailData({ ...emailData, subjectText: event.target.value });
    }

    function handleEmailTextChange(event){
        setEmailData({ ...emailData, emailText: event.target.value });
    }

    return(
        <div className="emailEditor">
            <form className="emailForm" method="POST">
                <label htmlFor="senderInput">Sender
                    <input id="senderInput" name="sender" value={emailData.sender} type="email" disabled />
                </label>

                <input type="email" name="recipientEmail" placeholder="Recipient" value={emailData.recipient} onChange={handleRecipientChange} />
                <input type="text" name="subjectText" placeholder="Subject" value={emailData.subjectText} onChange={handleSubjectTextChange} />
                <textarea name="emailText" placeholder="Email text" value={emailData.emailText} onChange={handleEmailTextChange}></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );  
}

export default EmailEditor;