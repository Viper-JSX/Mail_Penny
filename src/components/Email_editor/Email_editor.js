import { useState } from "react";
import { useSelector } from "react-redux";

import RichTextEditor from '../Rich_text_editor/Rich_text_editor';

function EmailEditor({ handleEmailSend }){
    const user = useSelector((state) => state.user);
    const [ emailData, setEmailData ] = useState({ 
        sender: user.id,
        recipient: "",
        subject: "",
        message: ""
    });


    function handleRecipientChange(event){
        setEmailData({ ...emailData, recipient: event.target.value });
    }

    function handleSubjectTextChange(event){
        setEmailData({ ...emailData, subject: event.target.value });
    }

    function handleEmailTextChange(value){
        setEmailData((prevData) => {
            return { ...prevData, message: value }
        });
    }

    return(
        <div className="emailEditor">
            <form className="emailForm" method="POST" onSubmit={(event) => handleEmailSend({ event, emailData })}>
                <label htmlFor="senderInput">Sender: 
                    <input id="senderInput" name="sender" value={user?.email || "none"} type="email" disabled />
                </label>

                <input type="email" name="recipientEmail" placeholder="Recipient" value={emailData.recipient} onChange={handleRecipientChange} />
                <input type="text" name="subjectText" placeholder="Subject" value={emailData.subjectText} onChange={handleSubjectTextChange} />
                <RichTextEditor handleEmailTextChange={handleEmailTextChange} />

                <button id="sendEmail" type="submit">Send</button>
            </form>
        </div>
    );  
}

export default EmailEditor;