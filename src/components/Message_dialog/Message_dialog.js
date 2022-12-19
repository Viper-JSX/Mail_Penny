import { useSelector } from "react-redux";

function MessageDialog(){
    const message = useSelector((state) => state.message);
    useSelector((state) => state.message)

    if(!message){
        return null;
    }

    return(
        <div className="messageDialog">
            Some message
        </div>
    );
}

export default MessageDialog;