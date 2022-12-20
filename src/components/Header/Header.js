import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <h2 className="appTitle"><Link to="/">Mail Penny</Link></h2>
        </header>
    )
}

export default Header