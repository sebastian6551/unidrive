import './styles/principalDriver.css';
import AuthContext from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppBarComponent } from './AppBarComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import BidderServices from '../hooks/bidder.services';

export const PrincipalBidder = () => {
	const { logout, user, token, setUserVehicles } = useContext(AuthContext);
	const navigate = useNavigate();

	const getVehicle = BidderServices.getVehicle;
	const getTrips = BidderServices.getTrips;

	const handleCreateTrip = event => {
		event.preventDefault();
		getVehicle(token).then(res => {
			console.log(res);
			if (res.status === 200) {
				const req = res.json();
				console.log(req);
				req.then(value => {
					localStorage.setItem('vehicles', JSON.stringify(value));
					setUserVehicles(value);
				});
				navigate('/bidder/createTrip');
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
	};

	// If there is no trip in progress when calling the DB, a message is displayed
	const tripInCourse = dataCall => {
		if (dataCall) {
			return (
				<div>
					<PrincipalDriverBody />
				</div>
			);
		} else {
			return (
				<div className='inCourseCaptionContainer'>
					<h1 className='noTripInCourseCaption'>No hay viajes en curso.</h1>
				</div>
			);
		}
	};

	const PrincipalDriverBody = () => {
		// They will be modified according to the DB information.
		const [dayCaption] = useState('Lunes');
		const [hourCaption] = useState('6:30 am');
		const [departureCaption] = useState('Centro');
		const [arrivalCaption] = useState('Univalle');
		const [passengerName] = useState('Victor');
		const [pickupPlace] = useState('Cra 80 Cll 13');

		return (
			<div>
				<div className='inCourseContainer'>
					<div className='firstLineInCourse'>
						<label className='dayCaptionInCourse'>{dayCaption}</label>
						<label className='hourCaptionInCourse'>{hourCaption}</label>
					</div>
					<label className='departureArrivalCaptions'>
						Partida: {departureCaption}
					</label>
					<label className='departureArrivalCaptions'>
						Llegada: {arrivalCaption}
					</label>
				</div>
				<div className='passengersCaptionContainer'>
					<h1 className='passengersCaption'>Pasajeros</h1>
				</div>
				<div className='passengersBodyContainer'>
					<div className='passengersContainer'>
						<label className='passengerNameCaption'>{passengerName}</label>
						<label className='pickupCaption'>Recoger en: {pickupPlace}</label>
					</div>
					<div className='passengersContainer'>
						<label className='passengerNameCaption'>{passengerName}</label>
						<label className='pickupCaption'>Recoger en: {pickupPlace}</label>
					</div>
					<div className='passengersContainer'>
						<label className='passengerNameCaption'>{passengerName}</label>
						<label className='pickupCaption'>Recoger en: {pickupPlace}</label>
					</div>
					<div className='passengersContainer'>
						<label className='passengerNameCaption'>{passengerName}</label>
						<label className='pickupCaption'>Recoger en: {pickupPlace}</label>
					</div>
				</div>
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
			<h1 className='h1Style'>Hola {user.firstName}!</h1>
			<div className='space2px'></div>
			<button
				className='newTripButton'
				title='Crear viaje'
				type='button'
				onClick={handleCreateTrip}
			>
				Nuevo viaje +
			</button>
			<div className='space9px'></div>
			<div className='inCourseCaptionContainer'>
				<h1 className='inCourseCaption'>En curso</h1>
			</div>
			{tripInCourse(true)}
			<div className='space9px'></div>
			<div className='appBarPosition'>
				<AppBarComponent></AppBarComponent>
			</div>
		</div>
	);
};
