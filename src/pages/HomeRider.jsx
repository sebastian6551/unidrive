import '../components/styles/preLogin.css'
import '../components/styles/loginRegistration.css';
import AuthContext from "../services/AuthContext.jsx";
import {useContext} from "react";

export const HomeRider = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className='base'>
            <div>
                <h1> Rider </h1>
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
