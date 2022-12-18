import { Outlet, Route, Routes } from "react-router";
import Header from "./Header/Header";

function Layout(){
    return(
        <div id="layout">
            <Header />
            <Routes>
                <Route path="/" element={<h2>Main Page</h2>} />
                <Route path="/authorization" element={<h2>Authorization</h2>} />
                <Route path="/emails" element={<h2>Emails</h2>} />
                <Route path="/emails/:id" element={<h2>Emails viewer</h2>} />    
                <Route path="/emails/create" element={<h2>Emails Editor</h2>} />
            </Routes>
        </div>
    )
}

export default Layout;