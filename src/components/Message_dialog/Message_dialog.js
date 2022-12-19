import { useSelector } from "react-redux";

function MessageDialog(){
    const message = useSelector((state) => state.message);

    if(!message){ //There is no message
        return null;
    }

    return(
        <div className="messageDialog">
            <b className="messageTitle">{ message.messageTitle }</b>
            <p className="messageText">{ message.messageText }</p>
        </div>
    );
}

export default MessageDialog;