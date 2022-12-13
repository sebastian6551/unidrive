import { CardComponent } from './CardComponent';
import { AppBarComponent } from './AppBarComponent';
import './styles/principalBidder.css';
import { Box, Grid } from '@mui/material';
import './styles/loginRegistration.css';
import AuthContext from '../hooks/AuthContext';
import { useContext } from 'react';

export const PrincipalRider = () => {
	const { logout, user } = useContext(AuthContext);
	return (
		<div>
			<h1 className='h1Style'>Hola {user.firstName}!</h1>

			<button className='searchTravelButton' onClick={logout}>
				Buscar Viaje
			</button>

			<Box className='cardContainer'>
				<h2 className='h2Style'>Viajes próximos a salir</h2>
				<h3 className='h3Style'>Ahora</h3>

				<CardComponent
					day='Day'
					hour='hour'
					startingPoint='startingPoint'
					arrivalPoint='arrivalPoint'
				></CardComponent>

				<h3 className='h4Style'>Mas tarde</h3>
				<Grid direction='row' spacing={4}>
					<item>
						<CardComponent
							day='Day'
							hour='hour'
							startingPoint='startingPoint'
							arrivalPoint='arrivalPoint'
						></CardComponent>
					</item>
					<div className='space10px'></div>
					<item>
						<CardComponent
							day='Day'
							hour='hour'
							startingPoint='startingPoint'
							arrivalPoint='arrivalPoint'
						></CardComponent>
					</item>
				</Grid>
			</Box>

			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
