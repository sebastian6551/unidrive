import './styles/principalDriver.css';
import './styles/principalBidder.css';
import AuthContext from '../services/AuthContext';
import { useContext } from 'react';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';

export const PrincipalDriver = () => {
	const { logout } = useContext(AuthContext);
	return (
		<div>
			<div className='space2vh'></div>
			<span className='spaceLeftForLogOut'>
				<button
					className='logOutArrow'
					title='Cerrar sesión'
					type='button'
					onClick={logout}
				>
					<img src={logOutArrow} />
				</button>
			</span>
			<div className='space9px'></div>
			<button className='searchTravelButton' title='Crear viaje' type='button'>
				Crear viaje +
			</button>
			<div className='space9px'></div>
			<div className='inCourseContainer'></div>
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
