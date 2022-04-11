import React, { useContext } from 'react';
import MyInput from './../components/UI/inpit/MyInput';
import MyButton from './../components/UI/button/MyButton';
import { AuthContext } from './../components/UI/context/index';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (  
        <div>
            <h1>Підтвердження доступу</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введіть логін"/>
                <MyInput type="password" placeholder="Введіть пароль"/>
                <MyButton>Увійти</MyButton>
            </form>
        </div>
    );
}
 
export default Login;