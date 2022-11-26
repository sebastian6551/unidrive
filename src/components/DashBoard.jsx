import './styles/preLogin.css';
import './styles/loginRegistration.css';
import AuthContext from "../services/AuthContext.jsx";
import {useContext} from "react";

export const DashBoard = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className='base'>
            <div>
                <h1> DashBoard </h1>
            </div>
            <div className='spaceForEmailPasswordAndLogInButton'></div>
            <input
                title='Logout'
                className='logInButton'
                type='submit'
                value='Logout'
                onClick={logout}
            />
            <div className='spaceForEmailPasswordAndLogInButton'></div>
        </div>
    );
};
