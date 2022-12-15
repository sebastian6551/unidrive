import '../components/styles/upComingTripsDriver.css';
import { CardComponent } from '../components/CardComponent';
import { AppBarComponent } from '../components/AppBarComponent';
import { RedBoxInterfaceTitleComponent } from '../components/RedBoxInterfaceTitleComponent';
import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../hooks/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useConfirm } from 'material-ui-confirm';
import BidderServices from '../hooks/bidder.services';

export const UpcomingTripsBidder = () => {
	const { logout, token, setUserTrips } = useContext(AuthContext);
	const [trips, setTrips] = useState();
	const disableTrip = BidderServices.disableTrip;
	const getTrips = BidderServices.getTrips;
	const confirm = useConfirm();

	useEffect(() => {
		setTrips(null);
		let ignore = false;
		getTrips(token).then(res => {
			if (res.status === 200) {
				const req = res.json();
				req.then(value => {
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

	const setDay = num => {
		switch (num) {
			case 1:
				return 'Lunes';
			case 2:
				return 'Martes';
			case 3:
				return 'Miércoles';
			case 4:
				return 'Jueves';
			case 5:
				return 'Viernes';
			case 6:
				return 'Sabado';
			default:
				return 'Domingo';
		}
	};

	const setTime = str => {
		const date = new Date(str);
		const other = date.toDateString();
		return other.substring(3, 11);
	};

	const cards = Array.isArray(trips) ? (
		trips.map(point => (
			<CardComponent
				key={point.id}
				id={point.id}
				day={setTime(point.date) + setDay(point.day)}
				hour={point.hour}
				startingPoint={point.toUniversity ? point.meetPoint : 'Univalle'}
				arrivalPoint={point.toUniversity ? 'Univalle' : point.meetPoint}
				handleDelete={handleDelete}
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
