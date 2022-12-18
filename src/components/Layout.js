import { Route, Routes } from "react-router";
import Header from "./Header/Header";

function Layout(){
    return(
        <div id="layout">
            <Header />
            <Routes>
                <Route path="/" element={<h2>Main Page</h2>} exact={true} />
                <Route path="/authorization" element={<h2>Authorization</h2>} />
            </Routes>
        </div>
    )
}

export default Layout;