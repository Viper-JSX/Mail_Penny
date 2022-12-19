import { Route, Routes } from "react-router";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Email from "./Emails/Email";
import EmailEditor from "./Email_editor/Email_editor";
import Authorization from "./Authorization/Authorization";
import SignUpForm from "./Authorization/Sign_up_form";
import SignInForm from "./Authorization/Sign_in_form";
import MessageDialog from "./Message_dialog/Message_dialog";

function Layout({ 
    handleEmailsSwitch,
    handleEmailSend,
    handleEmailDelete,

    handleSignIn,
    handleSignUp,
    handleSignOut
 }){
    return(
        <div id="layout">
            <Header />

            <Routes>
                <Route path="/" element={<MainPage handleSignOut={handleSignOut} handleEmailsSwitch={handleEmailsSwitch} />} />
                <Route path="/emails/:id" element={<Email handleEmailDelete={handleEmailDelete} />} />    
                <Route path="/emails/create" element={<EmailEditor handleEmailSend={handleEmailSend} />} />

                <Route path="/authorization" element={<Authorization />}>
                    <Route path="sign-in" element={<SignInForm handleSignIn={handleSignIn} />} />
                    <Route path="sign-up" element={<SignUpForm handleSignUp={handleSignUp} />} />
                </Route>

                <Route path="*" element={<h2>404 <br />Not found</h2>} />
            </Routes>

            <MessageDialog />
        </div>
    )
}

export default Layout;