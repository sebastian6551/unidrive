import '../components/styles/upComingTripsDriver.css';
import { CardComponent } from '../components/CardComponent';
import { AppBarComponent } from '../components/AppBarComponent';
import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../hooks/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useConfirm } from 'material-ui-confirm';
import BidderServices from '../hooks/bidder.services';
import stringFormat from '../hooks/stingFormat';
import jsonFormat from '../hooks/jsonFormat';

export const UpcomingTripsBidder = () => {
	const { logout, token, setUserTrips } = useContext(AuthContext);
	const [trips, setTrips] = useState();
	const disableTrip = BidderServices.disableTrip;
	const getTrips = BidderServices.getTrips;
	const setTime = stringFormat.setTime;
	const getHour = stringFormat.getHour;
	const setDay = stringFormat.setDay;
	const setMeetPoint = stringFormat.setMeetPoint;
	const sortArray = jsonFormat.sortArrayDate;
	const confirm = useConfirm();

	useEffect(() => {
		setTrips(null);
		let ignore = false;
		getTrips(token).then(res => {
			if (res.status === 200) {
				const req = res.json();
				console.log(req);
				req.then(value => {
					console.log(value);
					sortArray(value);
					console.log(value);
					if (!ignore) {
						setTrips(value);
					}
				});
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
		return () => {
			ignore = true;
		};
	}, []);

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
		confirm({
			title: '¿Esta seguro de eliminar este viaje?',
			description: `Esto puede ser permanente.`,
		})
			.then(() => {
				const newTrips = trips.filter(trip => trip.id !== id);
				setTrips(newTrips);
				handleDisableTrip(id);
				setUserTrips(newTrips);
			})
			.catch(() => console.log('Deletion cancelled.'));
	};

	const cards = Array.isArray(trips) ? (
		trips.map(point => (
			<CardComponent
				key={point.id}
				id={point.id}
				day={setTime(point.date) + setDay(point.day)}
				hour={getHour(point.date)}
				startingPoint={
					point.toUniversity
						? setMeetPoint(point.meetPoint)
						: 'Univalle - Melendez'
				}
				arrivalPoint={
					point.toUniversity
						? 'Univalle - Melendez'
						: setMeetPoint(point.meetPoint)
				}
				handleDelete={handleDelete}
				typeUser='bidder'
				other={[point.rate, point.description]}
			></CardComponent>
		))
	) : (
		<h1>Cargando...</h1>
	);

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
