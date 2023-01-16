import { CardComponent } from './CardComponent';
import { AppBarComponent } from './AppBarComponent';
import './styles/principalBidder.css';
import { Box, Grid } from '@mui/material';
import './styles/loginRegistration.css';
import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../hooks/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const PrincipalRider = () => {
	const { logout, user } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleSearchTrip = () => {
		navigate('/rider/searchTrip');
	};

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

			<h1 className='h1Style'>Hola {user.firstName}!</h1>

			<button className='searchTravelButton' onClick={handleSearchTrip}>
				Buscar Viaje
			</button>

			<Box className='cardContainer'>
				<h2 className='h2Style'>Viajes próximos a salir</h2>
				<div className='space9px'></div>
				<h3 className='h3Style'>Ahora</h3>
				<div className='space9px'></div>
				<CardComponent
					day='Day'
					hour='hour'
					startingPoint='startingPoint'
					arrivalPoint='arrivalPoint'
				/>
				<h3 className='h4Style'>Mas tarde</h3>
				<Grid direction='row' spacing={4}>
					<item>
						<CardComponent
							day='Day'
							hour='hour'
							startingPoint='startingPoint'
							arrivalPoint='arrivalPoint'
						/>
					</item>
					<div className='space9px'></div>
					<item>
						<CardComponent
							day='Day'
							hour='hour'
							startingPoint='startingPoint'
							arrivalPoint='arrivalPoint'
							typeUser='rider'
						/>
					</item>
				</Grid>
			</Box>

			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
