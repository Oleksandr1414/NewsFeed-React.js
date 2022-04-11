import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/posts">Пости</Link>
                <Link to="/about">Про автора</Link>
            </div>
        </div>
    );
}
 
export default NavBar;