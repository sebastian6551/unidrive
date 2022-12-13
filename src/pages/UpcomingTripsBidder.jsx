import { CardComponent } from '../components/CardComponent';
import { AppBarComponent } from '../components/AppBarComponent';
import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
import '../components/styles/upComingTripsDriver.css';
import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../hooks/AuthContext';
import { useContext } from 'react';

export const UpcomingTripsBidder = () => {
	const { logout } = useContext(AuthContext);
	const temp = [
		{
			id: 1,
			day: 'Domingo',
			hour: '11:10',
			startingPoint: 'UV',
			arrivalPoint: 'Palmira',
		},
		{
			id: 2,
			day: 'Lunes',
			hour: '11:00',
			startingPoint: 'UV',
			arrivalPoint: 'Jamundi',
		},
		{
			id: 3,
			day: 'Martes',
			hour: '1:00',
			startingPoint: 'Palmira',
			arrivalPoint: 'UV',
		},
		{
			id: 4,
			day: 'Miercoles',
			hour: '2:00',
			startingPoint: 'Aut. Sur',
			arrivalPoint: 'UV',
		},
		{
			id: 5,
			day: 'Jueves',
			hour: '5:30',
			startingPoint: 'UV',
			arrivalPoint: 'casa',
		},
		{
			id: 6,
			day: 'Viernes',
			hour: '11:10',
			startingPoint: 'UV',
			arrivalPoint: 'casa',
		},
		{
			id: 7,
			day: 'Sabado',
			hour: '8:45',
			startingPoint: 'UV',
			arrivalPoint: 'casa',
		},
	];

	const cards = temp.map(point => (
		<CardComponent
			key={point.id}
			day={point.day}
			hour={point.hour}
			startingPoint={point.startingPoint}
			arrivalPoint={point.arrivalPoint}
		></CardComponent>
	));

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
			<RedBoxInterfaceTitleComponent title='Próximos viajes' />
			<div className='tripsContainer'>{cards}</div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
