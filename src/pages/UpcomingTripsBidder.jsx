import '../components/styles/upComingTripsDriver.css';
import { CardComponent } from '../components/CardComponent';
import { AppBarComponent } from '../components/AppBarComponent';
import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../hooks/AuthContext';
import { useContext, useState } from 'react';
import moment from 'moment';
import { useConfirm } from 'material-ui-confirm';
import BidderServices from '../hooks/bidder.services';

export const UpcomingTripsBidder = () => {
	const [trips, setTrips] = useState(null);
	const { logout, userTrips, token } = useContext(AuthContext);
	const disableTrip = BidderServices.disableTrip;
	const confirm = useConfirm();
	// const temp = [
	// 	{
	// 		id: 1,
	// 		day: 'Domingo',
	// 		hour: '11:10',
	// 		startingPoint: 'UV',
	// 		arrivalPoint: 'Palmira',
	// 	},
	// 	{
	// 		id: 2,
	// 		day: 'Lunes',
	// 		hour: '11:00',
	// 		startingPoint: 'UV',
	// 		arrivalPoint: 'Jamundi',
	// 	},
	// 	{
	// 		id: 3,
	// 		day: 'Martes',
	// 		hour: '1:00',
	// 		startingPoint: 'Palmira',
	// 		arrivalPoint: 'UV',
	// 	},
	// 	{
	// 		id: 4,
	// 		day: 'Miercoles',
	// 		hour: '2:00',
	// 		startingPoint: 'Aut. Sur',
	// 		arrivalPoint: 'UV',
	// 	},
	// 	{
	// 		id: 5,
	// 		day: 'Jueves',
	// 		hour: '5:30',
	// 		startingPoint: 'UV',
	// 		arrivalPoint: 'casa',
	// 	},
	// 	{
	// 		id: 6,
	// 		day: 'Viernes',
	// 		hour: '11:10',
	// 		startingPoint: 'UV',
	// 		arrivalPoint: 'casa',
	// 	},
	// 	{
	// 		id: 7,
	// 		day: 'Sabado',
	// 		hour: '8:45',
	// 		startingPoint: 'UV',
	// 		arrivalPoint: 'casa',
	// 	},
	// ];

	const handleDisableTrip = id => {
		disableTrip(token, id).then(res => {
			console.log(res);
			if (res.status === 201) {
				console.log('Viaje desahabilitado');
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
	};

	const handleDelete = id => {
		console.log(trips);
		confirm({
			title: '¿Esta seguro de eliminar este viaje?',
			description: `Esto puede ser permanente.`,
		})
			.then(() => {
				setTrips(trips.filter(trip => trip.id !== id));
				handleDisableTrip(id);
			})
			.catch(() => console.log('Deletion cancelled.'));
	};

	const handleTemp = event => {
		event.preventDefault();
		setTrips(userTrips);
		console.log(userTrips);
		toTimestamp(userTrips[0].date);
	};

	const toTimestamp = strDate => {
		let m = moment(strDate);
		return m.toLocaleString();
	};

	const setDay = num => {
		switch (num) {
			case 1:
				return 'Lunes';
			case 2:
				return 'Martes';
			case 3:
				return 'Miercoles';
			case 4:
				return 'Juves';
			case 5:
				return 'Vierenes';
			case 6:
				return 'Sabado';
			default:
				break;
		}
	};

	const cards = trips ? (
		trips.map(point => (
			<CardComponent
				key={point.id}
				id={point.id}
				day={setDay(point.day)}
				hour={point.hour}
				startingPoint={point.toUniversity ? point.meetPoint : 'Univalle'}
				arrivalPoint={point.toUniversity ? 'Univalle' : point.meetPoint}
				handleDelete={handleDelete}
			></CardComponent>
		))
	) : (
		<h1>No hay Viajes disponibles</h1>
	);

	return (
		<div>
			<span className='spaceLeftForLogOut'>
				<button
					className='logOutArrow'
					title='Cerrar sesión'
					type='button'
					onClick={handleDelete}
				>
					<img src={logOutArrow} />
				</button>
			</span>
			<span>
				<button onClick={handleTemp}>click</button>
			</span>
			<RedBoxInterfaceTitleComponent title='Próximos viajes' />
			<div className='tripsContainer'>{cards}</div>
			<div className='appBarPosition'>
				<AppBarComponent />
			</div>
		</div>
	);
};
