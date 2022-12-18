import { Outlet, Route, Routes } from "react-router";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Email from "./Emails/Email";
import EmailEditor from "./Email_editor/Email_editor";
import Authorization from "./Authorization/Authorization";

function Layout({ 
    handleEmailSend
 }){
    return(
        <div id="layout">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/emails/:id" element={<Email />} />    
                <Route path="/emails/create" element={<EmailEditor handleEmailSend={handleEmailSend} />} />

                <Route path="/authorization" element={<Authorization />}>
                    <Route path="sign-in" element={<h3>Sign-in</h3>} />
                    <Route path="sign-up" element={<h3>Sign-up</h3>} />
                </Route>

                <Route path="*" element={<h2>404 <br />Not found</h2>} />
            </Routes>
        </div>
    )
}

export default Layout;