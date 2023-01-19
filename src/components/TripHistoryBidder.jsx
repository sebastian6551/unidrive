import './styles/principalDriver.css';
import AuthContext from '../hooks/AuthContext';
import { useContext, useState } from 'react';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import { TripInfoBidderComponent } from './TripInfoBidderComponent';
export const TripHistoryBidder = () => {
	const { logout } = useContext(AuthContext);

	// If there is no trip history when calling the DB, a message is displayed
	const tripHistory = dataCall => {
		if (dataCall) {
			return <TripHistoryBody />;
		} else {
			return (
				<div className='inCourseCaptionContainer'>
					<h1 className='noTripInCourseCaption'>No hay historial de viajes.</h1>
				</div>
			);
		}
	};

	const TripHistoryBody = () => {
		// They will be modified according to the DB information.
		const [dayCaption] = useState('Cargando');
		const [hourCaption] = useState('--:--');
		const [departureCaption] = useState('Cargando');
		const [arrivalCaption] = useState('Cargando');

		return (
			<div className='tripHistoryBodyContainer'>
				<TripInfoBidderComponent
					dayCaption={dayCaption}
					hourCaption={hourCaption}
					departureCaption={departureCaption}
					arrivalCaption={arrivalCaption}
					color='#c7c7c7'
				/>
			</div>
		);
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
			<div className='space2px'></div>
			<div className='redDivDriver'>Historial</div>
			<div className='space9px'></div>
			{tripHistory(true)}
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
