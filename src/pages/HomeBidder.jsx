import '../components/styles/preLogin.css'
import '../components/styles/loginRegistration.css';
import AuthContext from "../services/AuthContext.jsx";
import {useContext} from "react";

export const HomeBidder = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className='base'>
            <div>
                <h1> Bidder </h1>
            </div>
            <div className='space9px'></div>
            <input
                title='Logout'
                className='logInButton'
                type='submit'
                value='Logout'
                onClick={logout}
            />
            <div className='space9px'></div>
        </div>
    );
};
