import '../components/styles/searchTripRider.css';
import '../components/styles/principalDriver.css';
import AuthContext from '../hooks/AuthContext';
import { useContext } from 'react';
import { AppBarComponent } from '../components/AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
export const SearchTripRider = () => {
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
			<div className='space2px'></div>
			<div className='redDivDriver'>Buscar un viaje</div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
