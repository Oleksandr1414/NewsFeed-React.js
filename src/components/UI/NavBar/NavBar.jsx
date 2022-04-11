import { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from './../context/index';

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return ( 
        <div className="navbar">
            <MyButton onClick={logout}>
                Вийти
            </MyButton>
            <div className="navbar__links">
                <Link to="/posts">Пости</Link>
                <Link to="/about">Про автора</Link>
            </div>
        </div>
    );
}
 
export default NavBar;