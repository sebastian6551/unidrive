import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../hooks/AuthContext';
import { useContext } from 'react';
import './styles/tripDetailBidder.css';
import { AppBarComponent } from '../components/AppBarComponent';
import { CardComponent } from './CardComponent';
import {PassengersContainerBidderComponent} from './PassengersContainerBidderComponent';

export const TripDetailBidder = () => {
	const { logout } = useContext(AuthContext);
	return (
		<div>
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

			<div className='cardPosition'>
				<CardComponent />
			</div>

			<div className='passengersCaptionContainer'>
					<h1 className='passengersCaption'>Pasajeros</h1>
				</div>
				<div className='passengersTripBodyContainer'>
					<PassengersContainerBidderComponent
						passengerName='Victor'
						pickupPlace='Cra 80 Cll 13'
					/>
					<PassengersContainerBidderComponent
						passengerName='Sara'
						pickupPlace='Cra 80 Cll 13'
					/>
					<PassengersContainerBidderComponent
						passengerName='Frank'
						pickupPlace='Cra 80 Cll 13'
					/>
					<PassengersContainerBidderComponent
						passengerName='Chris'
						pickupPlace='Cra 80 Cll 13'
					/>
				</div>

			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
