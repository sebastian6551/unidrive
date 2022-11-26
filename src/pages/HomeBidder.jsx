import '../components/styles/preLogin.css'
import '../components/styles/loginRegistration.css';
import AuthContext from "../services/AuthContext.jsx";
import {useContext} from "react";
import logOutArrow from '../assets/icons/logOutArrow.png';

export const HomeBidder = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className='base'>
            <div>
                <h1> !Hola Victor! </h1>
            </div>
            <div className='space9px'></div>
            <button
                title='Logout'
                className='backArrow'
                type='submit'
                onClick={logout}
            >
                <img src={logOutArrow} />
                </button>
            <div className='space9px'></div>
        </div>
    );
};
